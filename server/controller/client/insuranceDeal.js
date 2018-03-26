import insuranceDeal from '../../models/insuranceDeal'
import jwt from 'jsonwebtoken'
import conf from '../../config'
import user from '../../models/user'
module.exports = {
    // 当前用户的保单信息
    async getInsuranceDeal(ctx, next){
        let cookie = ctx.request.header.cookie;
        let token = cookie.slice(11,cookie.length);
        try {
            let tokenInfo = jwt.verify(token, conf.auth.client_secret);
            let data = await ctx.find(insuranceDeal, {userId: tokenInfo._id});
            // 筛选过期前的
            return ctx.send(data)
        }
        catch (e) {
            return ctx.sendError(e)
        }
    },


    async addInsuranceDeal(ctx, next){
        let cookie = ctx.request.header.cookie;
        let token = cookie.slice(11,cookie.length);
        let deal = ctx.request.body.dealInfo;
        let resID;
        deal.dealTime = new Date();
        deal.expiration = new Date(deal.dealTime);
        deal.expiration.setFullYear(deal.expiration.getFullYear() + deal.period);
        deal.expiration.setDate(deal.expiration.getDate()-1);
        try {
            jwt.verify(token, conf.auth.client_secret);
            // 判断是不是给这个被投保人买过 （身份证号）
            let test = await ctx.findOne(insuranceDeal, {insured: deal.insured, insuranceId: deal.insuranceId})
            if (test) {
                ctx.sendError('已为该被投保人买过该保险');
                return
            }
            await ctx.add(insuranceDeal, deal).then((res) => {
                resID = res._id
            });
            let ideal = await ctx.findOne(user,{_id: deal.userId})
            ideal.insuranceDeal.push({dealId: resID, dealState: 0}),
            await ctx.update(user, {_id: deal.userId}, {$set: {insuranceDeal: ideal.insuranceDeal}});
            return ctx.send('交易成功')
        }catch (e) {
            if ('TokenExpiredError' === e.name) {
                ctx.sendError('鉴权失败, 请重新登录!');
                ctx.throw(401, 'token expired,请及时本地保存数据！');
            }
            ctx.throw(401, 'invalid token');
            ctx.sendError('系统异常!');
        }
    },

    async cancelInsuranceDeal(ctx, next){
        let {_id} = ctx.request.body;
        try {
            await ctx.remove(insuranceDeal, _id)
            return ctx.send('取消成功')
        }catch (e) {
            return ctx.sendError(e)
        }
    }

};
