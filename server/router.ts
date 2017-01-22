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

router.get('/api/commitUpdateSyncRepo', async ctx => {
  const { verNumber, syncRepoName, synced } = ctx.request.query
  const commit = db.getCommitByVerNumber(verNumber)
  commit.syncRepoList.find(item => item.repoName === syncRepoName).synced = synced

  db.updateCommit(verNumber, commit)

  ctx.body = {
    code: 1000,
    desc: 'success',
    data: null,
  }
})

router.get('/api/getCommitDetail', async ctx => {
  const { verNumber } = ctx.request.query
  const commit = db.getCommitByVerNumber(verNumber)
  const repository = db.getRepositoryByName(commit.repoName)

  const simpleGit = git(path.resolve(repository.url))
  simpleGit.show(`--summary --pretty=format:%s%D ${commit.verNumber}`, (err, log) => {
    console.log(log)
    ctx.body = log
  })
})

router.get('/api/getRepositoryList', async ctx => {
  ctx.body = db.getRepositoryList()
})

router.get('/api/insertRepository', async ctx => {
  const { name, url, diskPath } = ctx.request.query
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

router.get('/node_modules/**', async ctx => {
  await send(ctx, ctx.path)
})

export default router
