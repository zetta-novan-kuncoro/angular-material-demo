import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActorsRoutingModule } from './actors-routing.module';
import { ActorListComponent } from './actor-list/actor-list.component';
import { ActorDetailComponent } from './actor-detail/actor-detail.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    ActorListComponent,
    ActorDetailComponent,
  ],
  imports: [
    CommonModule,
    ActorsRoutingModule,
    MatCardModule,
    MatButtonModule,
  ]
})
export class ActorsModule { }
