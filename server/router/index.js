import koaRouter from 'koa-router'
const router = koaRouter();
import apifunc from './func'

export default app => {
    /*----------------------admin-------------------------------*/
    router.post('/api/admin/addinsurance', app.admin.insurance.addInsurance);
    router.get('/api/admin/allinsurance', app.admin.insurance.allInsurance);
    router.post('/api/admin/removeinsurance', app.admin.insurance.removeInsurance);
    router.post('/api/admin/updateinsurance', app.admin.insurance.updateInsurance);
    router.get('/api/admin/allinsurancedeal', app.admin.insuranceDeal.getAllInsuranceDeal);
    router.get('/api/admin/alluserinfo', app.admin.user.alluserinfo);
    router.get('/api/admin/userinfo', app.admin.user.userinfo);
    router.post('/api/admin/register', app.admin.user.register);
    router.post('/api/admin/login', app.admin.user.login);
    /*----------------------client-------------------------------*/
    router.post('/api/client/login', app.client.user.login);
    router.post('/api/client/register', app.client.user.register);
    router.get('/api/client/allinsurance', app.client.insurance.allInsurance);
    router.get('/api/client/userinfo', app.client.user.userinfo);
    router.get('/api/client/insurancedeal', app.client.insuranceDeal.getInsuranceDeal);
    router.post('/api/client/addinsurancedeal', app.client.insuranceDeal.addInsuranceDeal);
    router.post('/api/client/cancelinsurancedeal', app.client.insuranceDeal.cancelInsuranceDeal);
    router.post('/api/client/updateid', app.client.user.updateId);
    /*----------------------api-------------------------------*/
    router.get('/test', apifunc.test);
    router.get('/api/seller', apifunc.seller);
    router.get('/api/goods', apifunc.goods);
    router.get('/api/ratings', apifunc.ratings);
    app.use(router.routes()).use(router.allowedMethods());
}