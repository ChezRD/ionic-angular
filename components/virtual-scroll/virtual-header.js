import { Directive, TemplateRef } from '@angular/core';
/**
 * @hidden
 */
var VirtualHeader = (function () {
    function VirtualHeader(templateRef) {
        this.templateRef = templateRef;
    }
    return VirtualHeader;
}());
export { VirtualHeader };
VirtualHeader.decorators = [
    { type: Directive, args: [{ selector: '[virtualHeader]' },] },
];
/** @nocollapse */
VirtualHeader.ctorParameters = function () { return [
    { type: TemplateRef, },
]; };
//# sourceMappingURL=virtual-header.js.map