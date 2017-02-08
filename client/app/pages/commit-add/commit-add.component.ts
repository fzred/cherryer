import { Component, OnInit } from '@angular/core'

import Group from '../../../../server/models/Group'
import Commit from '../../../../server/models/Commit'
import Repository from '../../../../server/models/Repository'
import { CommitService } from '../../service/commit.service'
import { RepositoryService } from '../../service/repository.service'
import { GroupService } from "../../service/group.service";

@Component({
  moduleId: module.id,
  selector: 'commit-add',
  templateUrl: __uri('./commit-add.component.html'),
})
export class CommitAddComponent implements OnInit {
  model: Commit = { verNumber: '', repoName: '', syncRepoList: [] }

  syncRepoNameList: string[] = []

  repositorys: Repository[]

  groupId: string = ''

  groupList: Group[] = []

  constructor (private commitService: CommitService,
               private repositoryService: RepositoryService,
               private groupService: GroupService,) {
  }

  getRepositoryList () {
    this.repositoryService.getRepositoryList().then(repositorys => {
      this.repositorys = repositorys
    })
  }

  onSubmit () {
    this.commitService.insertCommit(this.model, this.syncRepoNameList)
      .then((res) => {
        console.log(res)
        alert('添加成功')
      })
  }

  ngOnInit () {
    this.getRepositoryList()

    this.groupService.getGroupList().then(groupList => {
      this.groupList = groupList
    })
  }
}
