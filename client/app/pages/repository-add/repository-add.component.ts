import { Component, OnInit } from '@angular/core'

import Commit from '../../../../server/models/Commit'
import Repository from '../../../../server/models/Repository'
import { CommitService } from '../../commit.service'

@Component({
  moduleId: module.id,
  selector: 'commit-add',
  templateUrl: __uri('./repository-add.component.html'),
})
export class RepositoryAddComponent {

  model: Repository = { name: '', url: '', diskPath: '' }

  constructor () {

  }

  onSubmit () {
    console.log(this.model, 'onSubmit')
  }

}
