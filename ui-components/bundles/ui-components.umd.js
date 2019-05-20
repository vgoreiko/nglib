(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/cdk/overlay'), require('@angular/cdk/portal')) :
    typeof define === 'function' && define.amd ? define('ui-components', ['exports', '@angular/core', '@angular/cdk/overlay', '@angular/cdk/portal'], factory) :
    (factory((global['ui-components'] = {}),global.ng.core,global.ng.cdk.overlay,global.ng.cdk.portal));
}(this, (function (exports,core,overlay,portal) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BtnComponent = /** @class */ (function () {
        function BtnComponent(overlay$$1) {
            this.overlay = overlay$$1;
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
                var config = new overlay.OverlayConfig();
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
            { type: core.Component, args: [{
                        selector: 'lib-hover-button',
                        template: "<button (mouseenter)=\"openFusilliPanel()\" (mouseleave)=\"closeFusilliPanel()\">\r\n  some button\r\n</button>\r\n<ng-template cdk-portal>\r\n  <p class=\"demo-template\">Blaaa on hover</p>\r\n</ng-template>\r\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        BtnComponent.ctorParameters = function () {
            return [
                { type: overlay.Overlay }
            ];
        };
        BtnComponent.propDecorators = {
            templatePortals: [{ type: core.ViewChildren, args: [portal.TemplatePortalDirective,] }]
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
            { type: core.NgModule, args: [{
                        declarations: [BtnComponent],
                        imports: [
                            overlay.OverlayModule,
                            portal.PortalModule,
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

    exports.UiComponentsModule = UiComponentsModule;
    exports.BtnComponent = BtnComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ui-components.umd.js.map