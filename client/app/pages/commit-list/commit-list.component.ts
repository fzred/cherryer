import { Component, OnInit } from '@angular/core'

import Group from '../../../../server/models/Group'
import Repository from '../../../../server/models/Repository'
import Commit from '../../../../server/models/Commit'
import { CommitService } from '../../service/commit.service'
import { GroupService } from '../../service/group.service'
import { RepositoryService } from "../../service/repository.service";

@Component({
  moduleId: module.id,
  selector: 'commit-list',
  templateUrl: __uri('./commit-list.component.html'),
})
export class CommitListComponent implements OnInit {
  commints: Commit[] = []

  gitCommitDetail = {}

  groupId: string = ''

  groupList: Group[] = []

  repositoryList: Repository[] = []

  hideComplete: Boolean = true // 隐藏已全部同步的

  constructor (private commitService: CommitService,
               private groupService: GroupService,
               private repositoryService: RepositoryService,) {
  }

  get commintListByFilter (): Commit[] {
    let commintList = this.commints
    if (this.hideComplete) {
      // 隐藏已全部同步的
      commintList = commintList.filter(commint => {
        return commint.syncRepoList.find(repo => !repo.synced)
      })
    }
    if (this.groupId) {
      // 分组
      const repositoryList = this.repositoryList.filter(repostory => {
        return repostory.groupId === this.groupId
      })
      commintList = commintList.filter(commint => {
        return !!repositoryList.find(repository => repository.name === commint.repoName)
      })
    }
    return commintList
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

    this.groupService.getGroupList().then(groupList => {
      this.groupList = groupList
    })

    this.repositoryService.getRepositoryList().then(commints => {
      this.repositoryList = commints
    })

  }
}
