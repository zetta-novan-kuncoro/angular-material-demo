import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorDetailComponent } from './actor-detail/actor-detail.component';
import { ActorListComponent } from './actor-list/actor-list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ActorListComponent,
  },
  {
    path: ':id',
    pathMatch: 'full',
    component: ActorDetailComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActorsRoutingModule { }
