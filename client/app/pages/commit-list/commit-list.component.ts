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

  constructor (private commitService: CommitService,
               private groupService: GroupService,
               private repositoryService: RepositoryService,) {
  }

  get commintListByFilter (): Commit[] {
    if (!this.groupId) return this.commints
    const repositoryList = this.repositoryList.filter(repostory => {
      return repostory.groupId === this.groupId
    })
    return this.commints.filter(commint => {
      return !!repositoryList.find(repository => repository.name === commint.repoName)
    })
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
