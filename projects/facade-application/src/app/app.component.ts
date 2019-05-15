import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Content</h1>
    <a routerLink="/person">Person</a>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
}
