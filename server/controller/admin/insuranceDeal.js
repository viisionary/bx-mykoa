module.exports = {
    async getAllInsuranceDeal(ctx, next){
        try {
            let data = await ctx.find(insuranceDeal)
            return ctx.send(data)
        }catch (e) {
            return ctx.sendError(e)
        }
    }
};