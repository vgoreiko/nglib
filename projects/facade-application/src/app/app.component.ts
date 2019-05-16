import {Component, SystemJsNgModuleLoader} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Content</h1>
    <a routerLink="/person">Person</a>
    <button (click)="loadModule()">Load module</button>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  constructor(private systemJsLoader: SystemJsNgModuleLoader) {
  }

  loadModule() {
    this.systemJsLoader.load('./person/person.module#PersonModule')
      .then((m) => {
        console.log(m);
      })
      .catch(e => console.error(e));
  }
}
