import { Component, OnInit } from '@angular/core'

import Repository from '../../../../server/models/Repository'
import { RepositoryService } from '../../service/repository.service'

@Component({
  moduleId: module.id,
  selector: 'commit-list',
  templateUrl: __uri('./repository-list.component.html'),
})
export class RepositoryListComponent implements OnInit {
  repositlryList: Repository[] = []

  constructor (private repositoryService: RepositoryService) {
  }

  getRepositoryList () {
    this.repositoryService.getRepositoryList().then(commints => {
      this.repositlryList = commints
    })
  }

  ngOnInit () {
    this.getRepositoryList()
  }

}
