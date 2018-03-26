import Koa from 'koa'
import serve from 'koa-static'
import router from './server/router'
const app = new Koa();
import middleware from './server/middleware'
import './server/mongodb'
//中间件
middleware(app);
//路由
router(app);
//静态资源管理
app.use(serve(__dirname + '/'));
app.listen(3000, () => { console.log('服务器已开启')});

