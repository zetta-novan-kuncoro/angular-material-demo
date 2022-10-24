import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    MovieListComponent,
    MovieDetailComponent,
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    MatCardModule,
    MatButtonModule,
  ]
})
export class MoviesModule { }
