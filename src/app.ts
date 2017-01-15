import * as Koa from 'koa'
import route from'./router'

const app = new Koa()
app.use(async(ctx, next) => {
  try {
    await next()
  } catch (err) {
    ctx.body = {desc: err.message};
    ctx.status = err.status || 500;
  }
})

app
  .use(route.routes())
  .use(route.allowedMethods())


app.listen(3000)
