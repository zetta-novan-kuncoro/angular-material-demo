import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActorService } from 'src/app/services/actor.service';

import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-actor-detail',
  templateUrl: './actor-detail.component.html',
  styleUrls: ['./actor-detail.component.scss']
})
export class ActorDetailComponent implements OnInit {
  actorId: string|null
  actor$: Observable<(Actor & { full_name: string })|null>

  constructor(private _route: ActivatedRoute, private _actorService: ActorService) {
    this.actorId = this._route.snapshot.paramMap.get('id')
    this.actor$ = this._actorService.getActor(this.actorId).pipe(
      map(actor => {
        return actor ? {
          ...actor,
          full_name: [actor.first_name, actor.last_name].filter(Boolean).join(' ')
        } : null
      })
    )
  }

  ngOnInit(): void {
  }

}
