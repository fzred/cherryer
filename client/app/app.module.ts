import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http'
import { AppComponent }  from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { CommitService } from './commit.service'

import { CommitListComponent } from './pages/commit-list/commit-list.component'


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    CommitListComponent,
  ],
  providers: [ CommitService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
