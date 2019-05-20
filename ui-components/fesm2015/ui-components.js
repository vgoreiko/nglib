import { Component, ViewChildren, NgModule } from '@angular/core';
import { Overlay, OverlayConfig, OverlayModule } from '@angular/cdk/overlay';
import { TemplatePortalDirective, PortalModule } from '@angular/cdk/portal';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BtnComponent {
    /**
     * @param {?} overlay
     */
    constructor(overlay) {
        this.overlay = overlay;
        this.nextPosition = 0;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    openFusilliPanel() {
        /** @type {?} */
        const config = new OverlayConfig();
        config.positionStrategy = this.overlay.position()
            .global()
            .centerHorizontally()
            .top(`${this.nextPosition}px`);
        this.nextPosition += 30;
        this.fusilliOverlayRef = this.overlay.create(config);
        this.fusilliOverlayRef.attach(this.templatePortals.first);
    }
    /**
     * @return {?}
     */
    closeFusilliPanel() {
        this.fusilliOverlayRef.dispose();
    }
}
BtnComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-hover-button',
                template: "<button (mouseenter)=\"openFusilliPanel()\" (mouseleave)=\"closeFusilliPanel()\">\r\n  some button\r\n</button>\r\n<ng-template cdk-portal>\r\n  <p class=\"demo-template\">Blaaa on hover</p>\r\n</ng-template>\r\n",
                styles: [""]
            }] }
];
/** @nocollapse */
BtnComponent.ctorParameters = () => [
    { type: Overlay }
];
BtnComponent.propDecorators = {
    templatePortals: [{ type: ViewChildren, args: [TemplatePortalDirective,] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UiComponentsModule {
}
UiComponentsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [BtnComponent],
                imports: [
                    OverlayModule,
                    PortalModule,
                ],
                exports: [BtnComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { UiComponentsModule, BtnComponent };

//# sourceMappingURL=ui-components.js.map