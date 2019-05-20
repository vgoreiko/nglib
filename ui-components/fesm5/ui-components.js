import { Component, ViewChildren, NgModule } from '@angular/core';
import { Overlay, OverlayConfig, OverlayModule } from '@angular/cdk/overlay';
import { TemplatePortalDirective, PortalModule } from '@angular/cdk/portal';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BtnComponent = /** @class */ (function () {
    function BtnComponent(overlay) {
        this.overlay = overlay;
        this.nextPosition = 0;
    }
    /**
     * @return {?}
     */
    BtnComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    BtnComponent.prototype.openFusilliPanel = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var config = new OverlayConfig();
        config.positionStrategy = this.overlay.position()
            .global()
            .centerHorizontally()
            .top(this.nextPosition + "px");
        this.nextPosition += 30;
        this.fusilliOverlayRef = this.overlay.create(config);
        this.fusilliOverlayRef.attach(this.templatePortals.first);
    };
    /**
     * @return {?}
     */
    BtnComponent.prototype.closeFusilliPanel = /**
     * @return {?}
     */
    function () {
        this.fusilliOverlayRef.dispose();
    };
    BtnComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-hover-button',
                    template: "<button (mouseenter)=\"openFusilliPanel()\" (mouseleave)=\"closeFusilliPanel()\">\r\n  some button\r\n</button>\r\n<ng-template cdk-portal>\r\n  <p class=\"demo-template\">Blaaa on hover</p>\r\n</ng-template>\r\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    BtnComponent.ctorParameters = function () { return [
        { type: Overlay }
    ]; };
    BtnComponent.propDecorators = {
        templatePortals: [{ type: ViewChildren, args: [TemplatePortalDirective,] }]
    };
    return BtnComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiComponentsModule = /** @class */ (function () {
    function UiComponentsModule() {
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
    return UiComponentsModule;
}());

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