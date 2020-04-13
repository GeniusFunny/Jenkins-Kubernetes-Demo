const Koa = require('koa');
const Router = require('koa-router');


const app = new Koa();
const router = new Router();

router.get('/', async (ctx, next)=> {
  ctx.body = 'Hello, Koa v1.0';
  await next();
})

app
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(8888)