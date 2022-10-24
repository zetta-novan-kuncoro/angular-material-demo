import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs'
import { map } from 'rxjs'

import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {
  movieId: string|null
  movie$: Observable<
    Movie & {
      actors: (Actor & {
        full_name: string
      })[]
    } | null
  >

  constructor(private route: ActivatedRoute, private movieService: MovieService) {
    this.movieId = this.route.snapshot.paramMap.get('id')
    this.movie$ = this.movieService.getMovie(this.movieId).pipe(map(movie => {
      return movie ? {
        ...movie,
        actors: movie.actors.map(actor => {
          return {
            ...actor,
            full_name: [actor.first_name, actor.last_name].filter(Boolean).join(' ')
          }
        })
      } : null
    }))
  }

  ngOnInit(): void {
  }

}
