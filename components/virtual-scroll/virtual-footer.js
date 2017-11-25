import { Directive, TemplateRef } from '@angular/core';
/**
 * @hidden
 */
var VirtualFooter = (function () {
    function VirtualFooter(templateRef) {
        this.templateRef = templateRef;
    }
    return VirtualFooter;
}());
export { VirtualFooter };
VirtualFooter.decorators = [
    { type: Directive, args: [{ selector: '[virtualFooter]' },] },
];
/** @nocollapse */
VirtualFooter.ctorParameters = function () { return [
    { type: TemplateRef, },
]; };
//# sourceMappingURL=virtual-footer.js.map