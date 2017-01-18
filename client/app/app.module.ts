import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http'
import { AppComponent }  from './app.component'
import { AppRoutingModule } from './app-routing.module'

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
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
