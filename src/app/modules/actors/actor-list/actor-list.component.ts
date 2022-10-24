import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ActorService } from 'src/app/services/actor.service';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.scss']
})
export class ActorListComponent implements OnInit {
  actors$: Observable<(Actor & { full_name: string })[]>

  constructor(private actorService: ActorService) {
    this.actors$ = this.actorService.getActors().pipe(
      map(actors => {
        return actors.map(actor => {
          return {
            ...actor,
            full_name: [actor.first_name, actor.last_name].filter(Boolean).join(' ')
          }
        })
      })
    )
  }

  ngOnInit(): void {
  }

}
