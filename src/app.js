const Koa = require('koa');
const Router = require('koa-router');


const app = new Koa();
const router = new Router();

router.get('/', async (ctx, next)=> {
  ctx.body = `老师下午好`;
  await next();
});
// router.get('/hello', async (ctx,next) => {
//   ctx.body = 'hello,world';
//   await next();
// });

app
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(8888)