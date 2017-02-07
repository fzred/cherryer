import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

import 'rxjs/add/operator/toPromise'
import Group from '../../../server/models/Group'

@Injectable()
export class GroupService {
  constructor (private http: Http) {
  }

  getGroupList (): Promise<Group[]> {
    return this.http.get('/api/getGroupList')
      .toPromise()
      .then(response => response.json() as Group[])
  }

  insertGroup (group: Group) {
    return this.http.post('/api/insertGroup', group)
      .toPromise()
  }

}
