import * as Koa from 'koa'
import * as koaStatic from 'koa-static'
import * as send from 'koa-send'
import * as path from 'path'
import route from'./router'

const app = new Koa()
app.use(async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    ctx.body = { desc: err.message };
    ctx.status = err.status || 500;
  }
})

app.use(route.routes()).use(route.allowedMethods())


app.use(koaStatic(path.resolve(__dirname, '../client')))

// 配合前端路由
app.use(async (ctx) => {
  if (/\.(css|js)/.test(ctx.path)) {
    ctx.status = 404
    ctx.body = `未找到${ctx.path}`
    // console.log(ctx.path)
  } else {
    await send(ctx, '/client/index.html')
  }
})

app.listen(3000)
