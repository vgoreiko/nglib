import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {Overlay, OverlayConfig, OverlayRef} from '@angular/cdk/overlay';
import {Portal, TemplatePortalDirective} from '@angular/cdk/portal';

@Component({
  selector: 'lib-hover-button',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss']
})
export class BtnComponent implements OnInit {
  nextPosition = 0;
  fusilliOverlayRef: OverlayRef;

  @ViewChildren(TemplatePortalDirective) templatePortals: QueryList<Portal<any>>;

  constructor(public overlay: Overlay) { }

  ngOnInit() {
  }

  openFusilliPanel() {
    const config = new OverlayConfig();

    config.positionStrategy = this.overlay.position()
      .global()
      .centerHorizontally()
      .top(`${this.nextPosition}px`);

    this.nextPosition += 30;

    this.fusilliOverlayRef = this.overlay.create(config);
    this.fusilliOverlayRef.attach(this.templatePortals.first);
  }

  closeFusilliPanel() {
    this.fusilliOverlayRef.dispose();
  }
}
