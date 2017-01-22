import { Injectable } from '@angular/core'
import { Http, URLSearchParams } from '@angular/http'

import 'rxjs/add/operator/toPromise'
import Repository from '../../../server/models/Repository'

@Injectable()
export class RepositoryService {
  constructor (private http: Http) {
  }

  getRepositoryList (): Promise<Repository[]> {
    return this.http.get('/api/getRepositoryList')
      .toPromise()
      .then(response => response.json() as Repository[])
  }

  insertRepository (repository: Repository): Promise<any> {
    return this.http.post('/api/insertRepository', {
      name: repository.name,
      url: repository.url,
      diskPath: repository.diskPath,
    }).toPromise()
  }
}
