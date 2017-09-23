import { Directive, TemplateRef } from '@angular/core';
/**
 * @hidden
 */
var VirtualHeader = /** @class */ (function () {
    /**
     * @param {?} templateRef
     */
    function VirtualHeader(templateRef) {
        this.templateRef = templateRef;
    }
    VirtualHeader.decorators = [
        { type: Directive, args: [{ selector: '[virtualHeader]' },] },
    ];
    /**
     * @nocollapse
     */
    VirtualHeader.ctorParameters = function () { return [
        { type: TemplateRef, },
    ]; };
    return VirtualHeader;
}());
export { VirtualHeader };
function VirtualHeader_tsickle_Closure_declarations() {
    /** @type {?} */
    VirtualHeader.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    VirtualHeader.ctorParameters;
    /** @type {?} */
    VirtualHeader.prototype.templateRef;
}
//# sourceMappingURL=virtual-header.js.map