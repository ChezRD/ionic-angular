import { Injectable } from '@angular/core';
import { App } from '../app/app';
import { Config } from '../../config/config';
import { Picker } from './picker';
/**
 * @hidden
 * \@name PickerController
 * \@description
 *
 */
var PickerController = /** @class */ (function () {
    /**
     * @param {?} _app
     * @param {?} config
     */
    function PickerController(_app, config) {
        this._app = _app;
        this.config = config;
    }
    /**
     * Open a picker.
     * @param {?=} opts
     * @return {?}
     */
    PickerController.prototype.create = function (opts) {
        if (opts === void 0) { opts = {}; }
        return new Picker(this._app, opts, this.config);
    };
    PickerController.decorators = [
        { type: Injectable },
    ];
    /**
     * @nocollapse
     */
    PickerController.ctorParameters = function () { return [
        { type: App, },
        { type: Config, },
    ]; };
    return PickerController;
}());
export { PickerController };
function PickerController_tsickle_Closure_declarations() {
    /** @type {?} */
    PickerController.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    PickerController.ctorParameters;
    /** @type {?} */
    PickerController.prototype._app;
    /** @type {?} */
    PickerController.prototype.config;
}
//# sourceMappingURL=picker-controller.js.map