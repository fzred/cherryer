import * as KoaRouter from 'koa-router'
import * as send from 'koa-send'
import * as path from 'path'
import * as git from 'simple-git'
import * as db from'./db/db'
const router = new KoaRouter()
import { checkStrEmpty } from './utils'

router.get('/api/getState', async ctx => {
  ctx.body = db.getState()
})

router.get('/api/getCommitList', async ctx => {
  ctx.body = db.getCommitList()
})

router.post('/api/insertCommit', async ctx => {
  const { verNumber, repoName, syncRepoName } = ctx.request.body
  if (checkStrEmpty(verNumber)) {
    throw new Error('verNumber必填')
  }
  if (checkStrEmpty(repoName)) {
    throw new Error('repoName必填')
  }

  const syncRepoList: Array<SyncRepo> = []

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

router.get('/api/commitAddSyncRepo', async ctx => {
  const { verNumber, syncRepoName } = ctx.request.query
  const commit = db.getCommitByVerNumber(verNumber)
  commit.syncRepoList.push({
    synced: false,
    repoName: syncRepoName,
  })

  db.updateCommit(verNumber, commit)

  ctx.body = {
    code: 1000,
    desc: 'success',
    data: null,
  }
})

router.post('/api/commitUpdateSyncRepo', async ctx => {
  const { verNumber, syncRepoName, synced } = ctx.request.body
  const commit = db.getCommitByVerNumber(verNumber)
  const syncRepo: SyncRepo = commit.syncRepoList.find(item => item.repoName === syncRepoName)
  syncRepo.synced = synced
  syncRepo.syncTime = new Date()

  db.updateCommit(verNumber, commit)

  ctx.body = {
    code: 1000,
    desc: 'success',
    data: null,
  }
})

router.post('/api/getGitCommitDetail', async ctx => {
  const { verNumber } = ctx.request.body
  const commit = db.getCommitByVerNumber(verNumber)
  const repository = db.getRepositoryByName(commit.repoName)

  return new Promise(resolve => {
    const simpleGit = git(path.resolve(repository.diskPath))
    simpleGit.show([ '--summary', '--pretty=format:%an - %s', commit.verNumber ], (err, log) => {
      ctx.body = {
        code: 1000,
        desc: 'success',
        data: log,
      }
      resolve()
    })
  })
})

router.get('/api/getRepositoryList', async ctx => {
  ctx.body = db.getRepositoryList()
})

router.post('/api/insertRepository', async ctx => {
  const { name, url, diskPath } = ctx.request.body
  if (checkStrEmpty(name)) {
    throw new Error('name必填')
  }
  if (checkStrEmpty(url)) {
    throw new Error('url必填')
  }
  db.insertRepository({
    name,
    url,
    diskPath,
  })
  ctx.body = {
    code: 1000,
    desc: 'success',
    data: null,
  }
})

router.get('/api/getGroupList', async ctx => {
  ctx.body = db.getGroupList()
})


router.post('/api/insertGroup', async ctx => {
  const { name, id } = ctx.request.body
  if (checkStrEmpty(name)) {
    throw new Error('name必填')
  }
  db.insertGroup({
    id,
    name,
  })
  ctx.body = {
    code: 1000,
    desc: 'success',
    data: null,
  }
})

router.get('/node_modules/**', async ctx => {
  await send(ctx, ctx.path)
})

export default router
