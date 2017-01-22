import { Injectable } from '@angular/core'
import { Headers, Http } from '@angular/http';

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
}
