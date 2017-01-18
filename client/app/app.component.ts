import { Component } from '@angular/core';
import { CommitService } from "./commit.service";
import Commit from '../../server/models/Commit'

@Component({
  selector: 'my-app',
  templateUrl: __uri('./app.component.html'),
  providers: [ CommitService ],
})
export class AppComponent {
  title: string;
  commints: Commit[] = [];
  commitService: CommitService;

  constructor (commitService: CommitService) {
    this.title = '1';
    this.commitService = commitService
  }

  async ngOnInit(){
    this.commints = await this.commitService.getCommit()
    console.log(this.commints)
  }

}
