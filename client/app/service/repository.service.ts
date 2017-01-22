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
    const params: URLSearchParams = new URLSearchParams()
    params.set('name', repository.name)
    params.set('url', repository.url)
    params.set('diskPath', repository.diskPath)
    return this.http.get('/api/insertRepository', { search: params })
      .toPromise()
  }
}
