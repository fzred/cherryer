import { Component, OnInit } from '@angular/core'

import Commit from '../../../../server/models/Commit'
import { CommitService } from '../../service/commit.service'

@Component({
  moduleId: module.id,
  selector: 'commit-list',
  templateUrl: __uri('./commit-list.component.html'),
})
export class CommitListComponent implements OnInit {
  commints: Commit[] = []

  gitCommitDetail = {}

  constructor (private commitService: CommitService) {
  }

  getCommit () {
    // this.commints =await this.commitService.getCommit()
    this.commitService.getCommit().then(commints => {
      this.commints = commints
      this.commints.forEach(item => {
        this.getGitCommitDetail(item)
      })
    })
  }

  onAyncRepo (commint: Commit, syncRepo: SyncRepo) {
    console.log(commint.verNumber, syncRepo.repoName, syncRepo.synced)
    this.commitService.commitUpdateSyncRepo({
      verNumber: commint.verNumber,
      syncRepoName: syncRepo.repoName,
      synced: syncRepo.synced,
    }).then(res => {
      console.log(res)
    })
  }

  getGitCommitDetail (commit: Commit) {
    this.commitService.getGitCommitDetail({
      verNumber: commit.verNumber
    }).then(({ data }) => {
      this.gitCommitDetail[ commit.verNumber ] = data
    })
  }

  ngOnInit () {
    this.getCommit()
  }
}
