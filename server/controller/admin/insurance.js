import insurance from '../../models/insurance'
let dataeg = {
    type: 0,
    avatar: 'http://p5mm9eqwz.bkt.clouddn.com/1c2b50bd59e15180f1e6270aefb32bcc.jpg',
    name: '平安e保险',
    info: '0.4元/天起 | 续保可至99 | 健康奖励',
    price: 17599,
    precept: {
        plan: [{info:'600万版',type: 0},{info:'200万版',type:1}],
        birthday: new Date(79, 4, 7),
        period: 1
    },
    coverage: [
        {
            name: '一般医疗保险金',
            info: '100万元'
        },
        {
            name: '恶性肿瘤保险金',
            info: '100万元'
        },
        {
            name: '年免赔额',
            info: '1万元'
        },
        {
            name: '保障区域',
            info: '中国大陆(不含港澳台)'
        },
        {
            name: '医院范围',
            info: '二级或二级以上公立医院普通部'
        }
    ],
    detail: ['http://p5mm9eqwz.bkt.clouddn.com/1c2b50bd59e15180f1e6270aefb32bcc.jpg', 'http://p5mm9eqwz.bkt.clouddn.com/1c2b50bd59e15180f1e6270aefb32bcc.jpg'],
    example: 'http://p5mm9eqwz.bkt.clouddn.com/1c2b50bd59e15180f1e6270aefb32bcc.jpg'
};
module.exports = {
    async addInsurance (ctx, next) {
        try {
            ctx.add(insurance, ctx.request.body).then((err)=> {
            })
        } catch (e) {
            console.log(e)
        }
    },
    async allInsurance (ctx, next) {
        try {
            let data = await ctx.find(insurance);
            return ctx.send(data)
        }
         catch (e) {
            return ctx.sendError(e)
        }
    },
    async removeInsurance(ctx, next){
        let {_id} = ctx.request.body;
        try {
            await ctx.remove(insurance, _id)
            return ctx.send('取消成功')
        }catch (e) {
            return ctx.sendError(e)
        }
    },
    async updateInsurance(ctx, next){
        let data = ctx.request.body;
        try {
            await ctx.update(insurance, data);
            return ctx.send('取消成功')
        }catch (e) {
            return ctx.sendError(e)
        }
    }
};
