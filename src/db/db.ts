import * as path from 'path'
import * as Lowdb from 'lowdb'
export const db = new Lowdb(path.resolve(__dirname, '../../db.json'))


export function getCommitList() {
  return db.value()
}

export function getState() {
  return db.getState()
}

export function insertCommit() {

}
