import * as path from 'path'
import * as Lowdb from 'lowdb'
import Commit from '../models/Commit'
import Repository from "../models/Repository";
export const db = new Lowdb(path.resolve(__dirname, '../../db.json'))


export function getCommitList () {
  return db.get('commit').value()
}

export function getCommitByVerNumber (verNumber): Commit {
  return db.get('commit').find({ verNumber }).value() as Commit
}

export function getState () {
  return db.getState()
}

export function insertCommit (commit: Commit) {
  if (db.get('commit').value<Array<Commit>>().find(item => item.verNumber === commit.verNumber))
    throw new Error('verNumber重复')
  return db.get('commit').push(commit).value()
}

// export function updateCommitSyncRepo (verNumber: string, repoName: string) {
//   return db.get('commit')
//     .find({ verNumber })
//     .find(repoName)
//     .assign({ synced: true })
//     .value()
// }

export function updateCommit (verNumber: string, commit: Commit) {
  return db.get('commit')
    .find({ verNumber })
    .assign(commit)
    .value()
}

export function updateCommitSyncRepoList (verNumber: string, syncRepoList: SyncRepo[]) {
  return db.get('commit')
    .find({ verNumber })
    .assign({ syncRepoList })
    .value()
}

export function getRepositoryList () {
  return db.get('repository').value()
}

export function insertRepository (repository: Repository) {
  if (db.get('repository').value<Array<Repository>>().find(item => item.name === repository.name))
    throw new Error('name重复')
  return db.get('repository').push(repository).value()
}

export function getRepositoryByName (name): Repository {
  return db.get('commit').find({ name }).value() as Repository
}
