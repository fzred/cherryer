import { Component, OnInit } from '@angular/core'

import Group from '../../../../server/models/Group'
import Repository from '../../../../server/models/Repository'
import { RepositoryService } from '../../service/repository.service'
import { GroupService } from "../../service/group.service";

@Component({
  moduleId: module.id,
  selector: 'commit-add',
  templateUrl: __uri('./repository-add.component.html'),
})
export class RepositoryAddComponent implements OnInit {

  model: Repository = { name: '', url: '', diskPath: '', groupId: '', }

  groupList: Group[] = []

  constructor (private repositoryService: RepositoryService,
               private groupService: GroupService) {
  }

  ngOnInit () {
    this.groupService.getGroupList().then(groupList => {
      this.groupList = groupList
    })
  }

  onSubmit () {
    this.repositoryService.insertRepository(this.model).then((res) => {
      console.log(res)
    })
  }

}
