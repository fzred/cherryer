import { Component, OnInit } from '@angular/core'
import Group from '../../../../server/models/Group'
import { GroupService } from '../../service/group.service'

@Component({
  moduleId: module.id,
  selector: 'group-list',
  templateUrl: __uri('./group-list.component.html')
})
export class GroupListComponent implements OnInit {
  groupList: Group[] = []

  constructor (private groupService: GroupService) {
  }

  ngOnInit () {
    this.groupService.getGroupList().then(groupList => {
      this.groupList = groupList
    })
  }

}
