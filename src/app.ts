import * as Koa from 'koa'
import route from'./router'

const app = new Koa()

app
  .use(route.routes())
  .use(route.allowedMethods())


app.listen(3000)
