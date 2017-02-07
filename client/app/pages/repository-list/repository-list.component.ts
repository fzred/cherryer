import { Component, OnInit } from '@angular/core'

import Group from '../../../../server/models/Group'
import Repository from '../../../../server/models/Repository'
import { RepositoryService } from '../../service/repository.service'
import { GroupService } from '../../service/group.service'

@Component({
  moduleId: module.id,
  selector: 'commit-list',
  templateUrl: __uri('./repository-list.component.html'),
})
export class RepositoryListComponent implements OnInit {
  repositlryList: Repository[] = []

  groupList: Group[] = []

  constructor (private repositoryService: RepositoryService,
               private groupService: GroupService,) {
  }

  getRepositoryList () {
    this.repositoryService.getRepositoryList().then(commints => {
      this.repositlryList = commints
    })
  }

  ngOnInit () {
    this.getRepositoryList()

    this.groupService.getGroupList().then(groupList => {
      this.groupList = groupList
    })
  }

  get groupRepositoryList (): { group: Group, repositlryList: Repository[] }[] {
    const groupRepository = []

    this.groupList.forEach(group => {
      groupRepository.push({
        group,
        repositlryList: this.repositlryList.filter(repository => repository.groupId === group.id)
      })
    })

    return groupRepository
  }
}
