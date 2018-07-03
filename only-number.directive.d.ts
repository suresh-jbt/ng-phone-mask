import { ElementRef } from '@angular/core';
export declare class OnlyNumberDirective {
    private el;
    onlyNumber: boolean;
    regexStr: string;
    constructor(el: ElementRef);
    onKeyDown(event: KeyboardEvent): void;
}
