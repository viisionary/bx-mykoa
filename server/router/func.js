import fs from 'fs'
let data = JSON.parse(fs.readFileSync('data.json'));
export default {
    seller(ctx) {
        if (ctx.request.accepts('json')) {
            ctx.response.type = 'json';
            ctx.response.body = {
                error: 0,
                data: data.seller
            }
        }
    },
    goods(ctx) {
        if (ctx.request.accepts('json')) {
            ctx.response.type = 'json';
            ctx.response.body = {
                errno: 0,
                data: data.goods
            }
        }
    },
    ratings(ctx) {
        if (ctx.request.accepts('json')) {
            ctx.response.type = 'json';
            ctx.response.body = {
                errno: 0,
                data: data.ratings
            }
        }
    },
    elm(ctx) {
        if (ctx.request.accepts('html')) {
            ctx.response.type = 'html';
            ctx.response.body = fs.readFileSync('elm.html')
        }
    },
    test(ctx) {
        if (ctx.request.accepts('html')) {
            ctx.response.type = 'html';
            ctx.response.body = fs.readFileSync('test.html')
        }
    }
}