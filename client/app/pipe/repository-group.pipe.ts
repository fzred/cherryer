import { Pipe, PipeTransform } from '@angular/core'
import Repository from "../../../server/models/Repository";

@Pipe({ name: 'repositoryGroup' })
export class repositoryGroupPipe implements PipeTransform {
  transform (value: Repository[], groupId: string): Repository[] {
    if (!value) return []
    return value.filter(repository => repository.groupId === groupId)
  }
}
