import bodyParser from 'koa-bodyparser'
import send from './send'
import func from './func'
import Rule from './rule'
import path from 'path'

export default (app) => {

    //缓存拦截器
    app.use(async (ctx, next) => {
        if (ctx.url === '/favicon.ico') return
        await next()
        ctx.status = 200
        ctx.set('Cache-Control', 'must-revalidation')
        if (ctx.fresh) {
            ctx.status = 304
            return 0
        }
    });
    //方法{ 数据库操作 }
    app.use(func());
    // 数据返回的封装
    app.use(send());
    //post请求处理
    app.use(bodyParser());

    //规则中间件
    Rule({
        app,
        rules: [
            {
                path: path.join(__dirname, '../controller/admin'),
                name: 'admin'
            },
            {
                path: path.join(__dirname, '../controller/client'),
                name: 'client'
            }
        ]
    });
    // 增加错误的监听处理
    app.on("error", (err, ctx) => {
        if (ctx && !ctx.headerSent && ctx.status < 500) {
            ctx.status = 500
        }
        if (ctx && ctx.log && ctx.log.error) {
            if (!ctx.state.logged) {
                ctx.log.error(err.stack)
            }
        }
    })
}