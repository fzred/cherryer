import { Component, OnInit } from '@angular/core'

import Commit from '../../../../server/models/Commit'
import Repository from '../../../../server/models/Repository'
import { RepositoryService } from '../../service/repository.service'

@Component({
  moduleId: module.id,
  selector: 'commit-add',
  templateUrl: __uri('./repository-add.component.html'),
})
export class RepositoryAddComponent {

  model: Repository = { name: '', url: '', diskPath: '' }

  constructor (private repositoryService: RepositoryService) {

  }

  onSubmit () {
    this.repositoryService.insertRepository(this.model)
      .then((res) => {
        console.log(res)
      })
  }

}
