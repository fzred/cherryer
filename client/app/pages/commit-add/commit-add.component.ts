import { Component, OnInit } from '@angular/core'

import Commit from '../../../../server/models/Commit'
import Repository from '../../../../server/models/Repository'
import { CommitService } from '../../service/commit.service'
import { RepositoryService } from '../../service/repository.service'

@Component({
  moduleId: module.id,
  selector: 'commit-add',
  templateUrl: __uri('./commit-add.component.html'),
})
export class CommitAddComponent implements OnInit {
  model: Commit = { verNumber: '', repoName: '', syncRepoList: [] }

  syncRepoNameList: string[] = []

  repositorys: Repository[];

  constructor (private commitService: CommitService,
               private repositoryService: RepositoryService,) {
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
      })
  }

  ngOnInit () {
    this.getRepositoryList()
  }
}
