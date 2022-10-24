import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ActorService {
  constructor(private _http: HttpClient) {}

  getActors(): Observable<Actor[]> {
    return this._http.get<Actor[]>('/assets/dummy-data/actors.json', {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    }).pipe(map(actors => {
      return actors || []
    }))
  }

  getActor(id: string|null): Observable<Actor|null> {
    return this._http.get<Actor[]>('/assets/dummy-data/actors.json', {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    }).pipe(map(actors => {
      return actors.find(actor => actor.id === id) || null
    }))
  }
}
