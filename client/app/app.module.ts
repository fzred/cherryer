import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http'
import { FormsModule }   from '@angular/forms'
import { AppComponent }  from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { CommitService } from './service/commit.service'
import { RepositoryService } from './service/repository.service'

import { CommitListComponent } from './pages/commit-list/commit-list.component'
import { CommitAddComponent } from './pages/commit-add/commit-add.component'
import { RepositoryAddComponent } from './pages/repository-add/repository-add.component'
import { RepositoryListComponent } from './pages/repository-list/repository-list.component'


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
  ],
  declarations: [
    AppComponent,
    CommitListComponent,
    CommitAddComponent,
    RepositoryAddComponent,
    RepositoryListComponent,
  ],
  providers: [
    CommitService,
    RepositoryService,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
