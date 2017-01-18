import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { CommitListComponent } from './pages/commit-list/commit-list.component'

const routes: Routes = [
  { path: 'commit-list', component: CommitListComponent, },
  { path: '', redirectTo: '/commit-list', pathMatch: 'full', },
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule {
}
