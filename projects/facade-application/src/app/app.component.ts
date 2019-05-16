import {Component, Injector, NgModuleFactory, SystemJsNgModuleLoader, ViewChild, ViewContainerRef} from '@angular/core';
import {PersonComponent} from './person/person.component';

@Component({
  selector: 'app-root',
  template: `
    <h1>Content</h1>
    <a routerLink="/person">Person</a>
    <button (click)="loadModule()">Load module</button>
    <template #container></template>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  @ViewChild('container', { read: ViewContainerRef }) viewRef: ViewContainerRef;
  constructor(private systemJsLoader: SystemJsNgModuleLoader,
              private injector:   Injector,) {
  }

  loadModule() {

    this.systemJsLoader.load('./person/person.module#PersonModule')
      .then((moduleFactory: NgModuleFactory<any>) => {
        const moduleRef = moduleFactory.create(this.injector);
        const compFactory = moduleRef
          .componentFactoryResolver
          .resolveComponentFactory(PersonComponent);
        this.viewRef.createComponent(compFactory)
      })
      .catch(e => console.error(e));
  }
}
