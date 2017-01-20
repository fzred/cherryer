import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { CommitListComponent } from './pages/commit-list/commit-list.component'
import { CommitAddComponent } from './pages/commit-add/commit-add.component'

const routes: Routes = [
  { path: 'commit-list', component: CommitListComponent, },
  { path: 'commit-add', component: CommitAddComponent, },
  { path: '', redirectTo: '/commit-list', pathMatch: 'full', },
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule {
}
