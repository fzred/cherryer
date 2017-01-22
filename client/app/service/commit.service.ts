import { Injectable } from '@angular/core'
import { Headers, Http, URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/toPromise'

import Commit from '../../../server/models/Commit'

@Injectable()
export class CommitService {
  constructor (private http: Http) {
  }

  getCommit (): Promise< Commit[]> {
    return this.http.get('/api/getCommitList')
      .toPromise()
      .then(response => response.json() as Commit[])
  }

  insertCommit (commit: Commit, syncRepoNameList: string[]): Promise<any> {
    return this.http.post('/api/insertCommit', {
      repoName: commit.repoName,
      verNumber: commit.verNumber,
      syncRepoName: syncRepoNameList,
    }).toPromise()
  }

  commitUpdateSyncRepo (params: { verNumber: string, syncRepoName: string, synced: Boolean }): Promise<any> {
    return this.http.post('/api/commitUpdateSyncRepo', params).toPromise()
  }
}
