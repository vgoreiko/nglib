/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, QueryList, ViewChildren } from '@angular/core';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { TemplatePortalDirective } from '@angular/cdk/portal';
export class BtnComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnRuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3VpLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvYnRuL2J0bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQVUsU0FBUyxFQUFFLFlBQVksRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6RSxPQUFPLEVBQUMsT0FBTyxFQUFFLGFBQWEsRUFBYSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hFLE9BQU8sRUFBUyx1QkFBdUIsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBT3BFLE1BQU0sT0FBTyxZQUFZOzs7O0lBTXZCLFlBQW1CLE9BQWdCO1FBQWhCLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFMbkMsaUJBQVksR0FBRyxDQUFDLENBQUM7SUFLc0IsQ0FBQzs7OztJQUV4QyxRQUFRO0lBQ1IsQ0FBQzs7OztJQUVELGdCQUFnQjs7Y0FDUixNQUFNLEdBQUcsSUFBSSxhQUFhLEVBQUU7UUFFbEMsTUFBTSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFO2FBQzlDLE1BQU0sRUFBRTthQUNSLGtCQUFrQixFQUFFO2FBQ3BCLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxDQUFDO1FBRWpDLElBQUksQ0FBQyxZQUFZLElBQUksRUFBRSxDQUFDO1FBRXhCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUQsQ0FBQzs7OztJQUVELGlCQUFpQjtRQUNmLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNuQyxDQUFDOzs7WUFoQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLGdPQUFtQzs7YUFFcEM7Ozs7WUFQTyxPQUFPOzs7OEJBWVosWUFBWSxTQUFDLHVCQUF1Qjs7OztJQUhyQyxvQ0FBaUI7O0lBQ2pCLHlDQUE4Qjs7SUFFOUIsdUNBQStFOztJQUVuRSwrQkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBRdWVyeUxpc3QsIFZpZXdDaGlsZHJlbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7T3ZlcmxheSwgT3ZlcmxheUNvbmZpZywgT3ZlcmxheVJlZn0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQge1BvcnRhbCwgVGVtcGxhdGVQb3J0YWxEaXJlY3RpdmV9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWItaG92ZXItYnV0dG9uJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYnRuLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9idG4uY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnRuQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBuZXh0UG9zaXRpb24gPSAwO1xyXG4gIGZ1c2lsbGlPdmVybGF5UmVmOiBPdmVybGF5UmVmO1xyXG5cclxuICBAVmlld0NoaWxkcmVuKFRlbXBsYXRlUG9ydGFsRGlyZWN0aXZlKSB0ZW1wbGF0ZVBvcnRhbHM6IFF1ZXJ5TGlzdDxQb3J0YWw8YW55Pj47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBvdmVybGF5OiBPdmVybGF5KSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxuICBvcGVuRnVzaWxsaVBhbmVsKCkge1xyXG4gICAgY29uc3QgY29uZmlnID0gbmV3IE92ZXJsYXlDb25maWcoKTtcclxuXHJcbiAgICBjb25maWcucG9zaXRpb25TdHJhdGVneSA9IHRoaXMub3ZlcmxheS5wb3NpdGlvbigpXHJcbiAgICAgIC5nbG9iYWwoKVxyXG4gICAgICAuY2VudGVySG9yaXpvbnRhbGx5KClcclxuICAgICAgLnRvcChgJHt0aGlzLm5leHRQb3NpdGlvbn1weGApO1xyXG5cclxuICAgIHRoaXMubmV4dFBvc2l0aW9uICs9IDMwO1xyXG5cclxuICAgIHRoaXMuZnVzaWxsaU92ZXJsYXlSZWYgPSB0aGlzLm92ZXJsYXkuY3JlYXRlKGNvbmZpZyk7XHJcbiAgICB0aGlzLmZ1c2lsbGlPdmVybGF5UmVmLmF0dGFjaCh0aGlzLnRlbXBsYXRlUG9ydGFscy5maXJzdCk7XHJcbiAgfVxyXG5cclxuICBjbG9zZUZ1c2lsbGlQYW5lbCgpIHtcclxuICAgIHRoaXMuZnVzaWxsaU92ZXJsYXlSZWYuZGlzcG9zZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=