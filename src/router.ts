import * as KoaRouter from 'koa-router'
import * as db from'./db/db'
const router = new KoaRouter()
import Commit from './models/Commit'

router.get('/api/getState', async ctx => {
  ctx.body = db.getState()
})

router.get('/api/getCommitList', async ctx => {
  ctx.body = db.getState()
})

router.get('/api/insertCommit', async ctx => {
  var d = db.insertCommit({
    verNumber: 'fsdf',
    repoName: 'sdfsd',
    syncRepoList: [],
  })
  console.log(d)
  ctx.body = '2'
})

export default router
