import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';
/**
 * @hidden
 */
var VirtualItem = /** @class */ (function () {
    /**
     * @param {?} templateRef
     * @param {?} viewContainer
     */
    function VirtualItem(templateRef, viewContainer) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
    }
    VirtualItem.decorators = [
        { type: Directive, args: [{ selector: '[virtualItem]' },] },
    ];
    /**
     * @nocollapse
     */
    VirtualItem.ctorParameters = function () { return [
        { type: TemplateRef, },
        { type: ViewContainerRef, },
    ]; };
    return VirtualItem;
}());
export { VirtualItem };
function VirtualItem_tsickle_Closure_declarations() {
    /** @type {?} */
    VirtualItem.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    VirtualItem.ctorParameters;
    /** @type {?} */
    VirtualItem.prototype.templateRef;
    /** @type {?} */
    VirtualItem.prototype.viewContainer;
}
//# sourceMappingURL=virtual-item.js.map