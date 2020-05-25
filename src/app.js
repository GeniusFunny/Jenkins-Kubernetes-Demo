const Koa = require('koa');
const Router = require('koa-router');


const app = new Koa();
const router = new Router();

router.get('/', async (ctx, next)=> {
  ctx.body = '演示专用 hhhhhh';
  await next();
})

app
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(8888)