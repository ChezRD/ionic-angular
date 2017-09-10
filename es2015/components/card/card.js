import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { Config } from '../../config/config';
import { Ion } from '../ion';
/**
 * @hidden
 */
export class Card extends Ion {
    /**
     * @param {?} config
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(config, elementRef, renderer) {
        super(config, elementRef, renderer, 'card');
    }
}
Card.decorators = [
    { type: Directive, args: [{
                selector: 'ion-card'
            },] },
];
/**
 * @nocollapse
 */
Card.ctorParameters = () => [
    { type: Config, },
    { type: ElementRef, },
    { type: Renderer2, },
];
function Card_tsickle_Closure_declarations() {
    /** @type {?} */
    Card.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    Card.ctorParameters;
}
//# sourceMappingURL=card.js.map