import * as path from 'path'
import * as Lowdb from 'lowdb'
const db = new Lowdb(path.resolve(__dirname, '../../db.json'))


function getCommitList() {
    return db.value()
}

function getState() {
    return db.getState()
}

function insertCommit() {

}

export default {db, getCommitList, getState}
