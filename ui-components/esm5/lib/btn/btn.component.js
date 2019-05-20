/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, QueryList, ViewChildren } from '@angular/core';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { TemplatePortalDirective } from '@angular/cdk/portal';
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
export { BtnComponent };
if (false) {
    /** @type {?} */
    BtnComponent.prototype.nextPosition;
    /** @type {?} */
    BtnComponent.prototype.fusilliOverlayRef;
    /** @type {?} */
    BtnComponent.prototype.templatePortals;
    /** @type {?} */
    BtnComponent.prototype.overlay;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnRuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3VpLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvYnRuL2J0bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQVUsU0FBUyxFQUFFLFlBQVksRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6RSxPQUFPLEVBQUMsT0FBTyxFQUFFLGFBQWEsRUFBYSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hFLE9BQU8sRUFBUyx1QkFBdUIsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBRXBFO0lBV0Usc0JBQW1CLE9BQWdCO1FBQWhCLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFMbkMsaUJBQVksR0FBRyxDQUFDLENBQUM7SUFLc0IsQ0FBQzs7OztJQUV4QywrQkFBUTs7O0lBQVI7SUFDQSxDQUFDOzs7O0lBRUQsdUNBQWdCOzs7SUFBaEI7O1lBQ1EsTUFBTSxHQUFHLElBQUksYUFBYSxFQUFFO1FBRWxDLE1BQU0sQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRTthQUM5QyxNQUFNLEVBQUU7YUFDUixrQkFBa0IsRUFBRTthQUNwQixHQUFHLENBQUksSUFBSSxDQUFDLFlBQVksT0FBSSxDQUFDLENBQUM7UUFFakMsSUFBSSxDQUFDLFlBQVksSUFBSSxFQUFFLENBQUM7UUFFeEIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1RCxDQUFDOzs7O0lBRUQsd0NBQWlCOzs7SUFBakI7UUFDRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbkMsQ0FBQzs7Z0JBaENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixnT0FBbUM7O2lCQUVwQzs7OztnQkFQTyxPQUFPOzs7a0NBWVosWUFBWSxTQUFDLHVCQUF1Qjs7SUF3QnZDLG1CQUFDO0NBQUEsQUFqQ0QsSUFpQ0M7U0E1QlksWUFBWTs7O0lBQ3ZCLG9DQUFpQjs7SUFDakIseUNBQThCOztJQUU5Qix1Q0FBK0U7O0lBRW5FLCtCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIFF1ZXJ5TGlzdCwgVmlld0NoaWxkcmVufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtPdmVybGF5LCBPdmVybGF5Q29uZmlnLCBPdmVybGF5UmVmfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7UG9ydGFsLCBUZW1wbGF0ZVBvcnRhbERpcmVjdGl2ZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi1ob3Zlci1idXR0b24nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9idG4uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2J0bi5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCdG5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIG5leHRQb3NpdGlvbiA9IDA7XHJcbiAgZnVzaWxsaU92ZXJsYXlSZWY6IE92ZXJsYXlSZWY7XHJcblxyXG4gIEBWaWV3Q2hpbGRyZW4oVGVtcGxhdGVQb3J0YWxEaXJlY3RpdmUpIHRlbXBsYXRlUG9ydGFsczogUXVlcnlMaXN0PFBvcnRhbDxhbnk+PjtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIG92ZXJsYXk6IE92ZXJsYXkpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG4gIG9wZW5GdXNpbGxpUGFuZWwoKSB7XHJcbiAgICBjb25zdCBjb25maWcgPSBuZXcgT3ZlcmxheUNvbmZpZygpO1xyXG5cclxuICAgIGNvbmZpZy5wb3NpdGlvblN0cmF0ZWd5ID0gdGhpcy5vdmVybGF5LnBvc2l0aW9uKClcclxuICAgICAgLmdsb2JhbCgpXHJcbiAgICAgIC5jZW50ZXJIb3Jpem9udGFsbHkoKVxyXG4gICAgICAudG9wKGAke3RoaXMubmV4dFBvc2l0aW9ufXB4YCk7XHJcblxyXG4gICAgdGhpcy5uZXh0UG9zaXRpb24gKz0gMzA7XHJcblxyXG4gICAgdGhpcy5mdXNpbGxpT3ZlcmxheVJlZiA9IHRoaXMub3ZlcmxheS5jcmVhdGUoY29uZmlnKTtcclxuICAgIHRoaXMuZnVzaWxsaU92ZXJsYXlSZWYuYXR0YWNoKHRoaXMudGVtcGxhdGVQb3J0YWxzLmZpcnN0KTtcclxuICB9XHJcblxyXG4gIGNsb3NlRnVzaWxsaVBhbmVsKCkge1xyXG4gICAgdGhpcy5mdXNpbGxpT3ZlcmxheVJlZi5kaXNwb3NlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==