import insurance from '../../models/insurance'
module.exports = {
    async allInsurance (ctx, next) {
        try {
            let data = await ctx.find(insurance);
            return ctx.send(data)
        }
        catch (e) {
            return ctx.sendError(e)
        }
    },

}
