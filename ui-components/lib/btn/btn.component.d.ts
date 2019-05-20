import { OnInit, QueryList } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { Portal } from '@angular/cdk/portal';
export declare class BtnComponent implements OnInit {
    overlay: Overlay;
    nextPosition: number;
    fusilliOverlayRef: OverlayRef;
    templatePortals: QueryList<Portal<any>>;
    constructor(overlay: Overlay);
    ngOnInit(): void;
    openFusilliPanel(): void;
    closeFusilliPanel(): void;
}
