import { Component, OnInit } from '@angular/core'
import Group from '../../../../server/models/Group'

import{ GroupService }from '../../service/group.service'

@Component({
  moduleId: module.id,
  selector: 'group-add',
  templateUrl: __uri('./group-add.component.html'),
})
export class GroupAddComponent {
  model: Group = { name: '' }

  constructor (private groupService: GroupService) {
  }

  onSubmit () {
    this.groupService.insertGroup(this.model)
      .then(res => {
        console.log(res)
        alert('添加成功')
      })
  }
}
