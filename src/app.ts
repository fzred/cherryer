import * as Koa from 'koa'

const app = new Koa()

app.use(async(ctx, next) => {
    const start = Date.now()
    await next()
    const ms = Date.now() - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// response
app.use(ctx => {
    ctx.body = 'Hello Koa in app-async.js'
})

app.listen(3000)
