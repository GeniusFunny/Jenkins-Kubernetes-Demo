const Koa = require('koa');
const Router = require('koa-router');


const app = new Koa();
const router = new Router();

app.listen(8888);

router.get('/', async (ctx, next)=> {
  ctx.body = 'Hello, World';
  await next();
})

app
  .use(router.routes())
  .use(router.allowedMethods());