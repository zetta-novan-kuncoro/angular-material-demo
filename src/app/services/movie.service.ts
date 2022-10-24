import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private _http: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    return this._http.get<Movie[]>('/assets/dummy-data/movies.json', {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    }).pipe(map(movies => {
      return movies || []
    }))
  }

  getMovie(id: string|null): Observable<Movie|null> {
    return this._http.get<Movie[]>('/assets/dummy-data/movies.json', {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    }).pipe(map(movies => {
      return movies.find(movie => movie.id === id) || null
    }))
  }
}
