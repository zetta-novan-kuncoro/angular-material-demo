import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-material-demo';
  showSidenav: boolean = true;
  links: Link[] = [
    {
      href: '/movies',
      label: 'Movies',
      matIcon: 'movie',
    },
    {
      href: '/actors',
      label: 'Actors',
      matIcon: 'face',
    },
    {
      href: '/about',
      label: 'About',
      matIcon: 'help',
    },
  ];
  selectedLink: Link|null

  constructor(private _route: ActivatedRoute) {
    this.selectedLink = this.links.find(link =>  link.href === location.pathname) || null
  }
}
