import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs'
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movieId: string|null
  movie$: Observable<Movie|null>

  constructor(private route: ActivatedRoute, private movieService: MovieService) {
    this.movieId = this.route.snapshot.paramMap.get('id')
    this.movie$ = this.movieService.getMovie(this.movieId)
  }

  ngOnInit(): void {
  }

}
