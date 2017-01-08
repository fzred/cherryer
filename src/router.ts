import * as KoaRouter from 'koa-router'
import * as db from'./db/db'
const router = new KoaRouter()

router.get('/api/getState', async ctx => {
  ctx.body = db.getState()
})

export default router
