import { Component, OnInit } from '@angular/core'

import Commit from '../../../../server/models/Commit'
import Repository from '../../../../server/models/Repository'
import { CommitService } from '../../commit.service'

@Component({
  moduleId: module.id,
  selector: 'commit-add',
  templateUrl: __uri('./commit-add.component.html'),
})
export class CommitAddComponent implements OnInit {
  commints: Commit[] = [];

  repositorys: Repository[];

  constructor (private commitService: CommitService) {
    this.repositorys = [
      {
        name: 'h5-allpyra',
        url: 'fsdfs',
      },
    ]
  }


  ngOnInit () {
  }
}
