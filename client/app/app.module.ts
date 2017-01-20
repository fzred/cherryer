import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http'
import { FormsModule }   from '@angular/forms'
import { AppComponent }  from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { CommitService } from './commit.service'

import { CommitListComponent } from './pages/commit-list/commit-list.component'
import { CommitAddComponent } from './pages/commit-add/commit-add.component'


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
  ],
  providers: [ CommitService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
