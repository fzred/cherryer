import * as path from 'path'
import * as Lowdb from 'lowdb'
import Commit from '../models/Commit'
export const db = new Lowdb(path.resolve(__dirname, '../../db.json'))


export function getCommitList() {
  return db.get('commit').value()
}

export function getState() {
  return db.getState()
}

export function insertCommit(commit: Commit) {
  if(db.get('commit').value<Array<Commit>>().find(item => item.verNumber === commit.verNumber))
    throw new Error('verNumber重复')
  return db.get('commit').push(commit).value()
}
