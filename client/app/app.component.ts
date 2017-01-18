import { Component, OnInit } from '@angular/core';
import { CommitService } from "./commit.service";
import Commit from '../../server/models/Commit'

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: __uri('./app.component.html'),
  providers: [ CommitService ],
})
export class AppComponent implements OnInit {
  title: string = '';
  commints: Commit[] = [];

  constructor (private commitService: CommitService) {
  }

  async getCommit () {
    // this.commints =await this.commitService.getCommit()
    this.commitService.getCommit().then(commints => {
      this.commints = commints
      console.log(this.commints)
    })
  }

  ngOnInit () {
    // this.getCommit()
  }

}
