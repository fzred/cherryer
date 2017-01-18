import { Injectable } from '@angular/core';
import Commit from '../../server/models/Commit'

@Injectable()
export class CommitService {
  getCommit (): Commit[] {
    return [
      {
        verNumber: 'ff',
        repoName: 'ddd',
        syncRepoList: [],
      }
    ]
  }
}
