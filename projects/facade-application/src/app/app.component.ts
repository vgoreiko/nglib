import {Compiler, Component, Injector, NgModuleFactory, SystemJsNgModuleLoader, ViewChild, ViewContainerRef} from '@angular/core';
import {PersonComponent} from './+person/person.component';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  template: `
    <section class="left-panel">
      <h1>Content</h1>
      <p>
        <a routerLink="/">Home</a>
      </p>
      <p>
        <a routerLink="/users">Users</a>
      </p>
      <p>
        <a routerLink="/person">Person</a>
      </p>
      <button (click)="loadModule()">Load module</button>
      <template #container></template>
    </section>
    <section class="content">
      <router-outlet></router-outlet>
    </section>
  `,
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  @ViewChild('container', {read: ViewContainerRef}) viewRef: ViewContainerRef;

  constructor(private systemJsLoader: SystemJsNgModuleLoader,
              private injector: Injector) {
  }

  loadModule() {
    this.viewRef.clear();

    const loader = this.getLoader(environment)
    const modulePath = this.getModulePath(environment)

    loader.load(modulePath)
      .then((moduleFactory: NgModuleFactory<any>) => {
        const moduleRef = moduleFactory.create(this.injector);
        const compFactory = moduleRef
          .componentFactoryResolver
          .resolveComponentFactory(PersonComponent);
        this.viewRef.createComponent(compFactory);
      })
      .catch(e => console.error(e));
  }

  private getLoader(env: {production: boolean}) {
    if (!env.production) {
      return this.systemJsLoader
    } else {
      return new SystemJsNgModuleLoader(new Compiler(),
        {
          factoryPathPrefix: '',
          factoryPathSuffix: ''
        })
    }

  }

  private getModulePath(env: {production: boolean}) {
    return env.production
      ? './+person/person.module.ngfactory#PersonModule'
      : './+person/person.module#PersonModule'
  }
}
