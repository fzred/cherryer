import * as KoaRouter from 'koa-router'
import * as db from'./db/db'
const router = new KoaRouter()
import{checkStrEmpty} from './utils'

router.get('/api/getState', async ctx => {
  ctx.body = db.getState()
})

router.get('/api/getCommitList', async ctx => {
  ctx.body = db.getCommitList()
})

router.get('/api/insertCommit', async ctx => {
  const {verNumber, repoName, syncRepoName} = ctx.request.query
  if (checkStrEmpty(verNumber)) {
    throw new Error('verNumber必填')
  }
  if (checkStrEmpty(repoName)) {
    throw new Error('repoName必填')
  }

  const syncRepoList: Array<AyncRepo> = []

  if (typeof syncRepoName === 'string') {
    syncRepoList.push({
      synced: false,
      repoName: syncRepoName,
    })
  }
  if (Array.isArray(syncRepoName)) {
    syncRepoName.forEach(repo => {
      syncRepoList.push({
        synced: false,
        repoName: repo,
      })
    })
  }

  db.insertCommit({
    verNumber,
    repoName,
    syncRepoList,
  })
  ctx.body = {
    code: 1000,
    desc: 'success',
    data: null,
  }
})

export default router
