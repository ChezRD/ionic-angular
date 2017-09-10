import { ElementRef, Renderer2 } from '@angular/core';
import { Config } from '../../config/config';
import { Ion } from '../ion';
/**
 * @hidden
 */
export declare class ListHeader extends Ion {
    private _id;
    constructor(config: Config, renderer: Renderer2, elementRef: ElementRef, _id: string);
    id: string;
}
