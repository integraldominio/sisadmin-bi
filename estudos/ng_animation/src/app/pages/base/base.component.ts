import { Component } from '@angular/core';
import { transition, trigger, query, style, animate, group, animateChild } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css'],
  animations: [
    trigger('animRoutes', [
      transition('* => *', [
        style({transform: 'translateX(-10%)'}),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({transform: 'translateX(10%)'}))
      ])
    ])
  ]
})
export class BaseComponent {
  title = 'app';

  getPage(outlet) {
    return outlet.activatedRouteData['page'] || '0';
  }
}
