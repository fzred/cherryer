const router = require('koa-router')()
const db = require('./db')

router.get('/api/getState', async ctx => {
  ctx.body = db.getState()
})

module.exports = router
