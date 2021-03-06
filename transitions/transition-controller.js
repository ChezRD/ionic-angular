import { Injectable } from '@angular/core';
import { Config } from '../config/config';
import { isPresent } from '../util/util';
import { Platform } from '../platform/platform';
/**
 * @hidden
 */
var TransitionController = (function () {
    function TransitionController(plt, _config) {
        this.plt = plt;
        this._config = _config;
        this._ids = 0;
        this._trns = {};
    }
    TransitionController.prototype.getRootTrnsId = function (nav) {
        nav = nav.parent;
        while (nav) {
            if (isPresent(nav._trnsId)) {
                return nav._trnsId;
            }
            nav = nav.parent;
        }
        return null;
    };
    TransitionController.prototype.nextId = function () {
        return this._ids++;
    };
    TransitionController.prototype.get = function (trnsId, enteringView, leavingView, opts) {
        var TransitionClass = this._config.getTransition(opts.animation);
        if (!TransitionClass) {
            // didn't find a transition animation, default to ios-transition
            TransitionClass = this._config.getTransition('ios-transition');
        }
        var trns = new TransitionClass(this.plt, enteringView, leavingView, opts);
        trns.trnsId = trnsId;
        if (!this._trns[trnsId]) {
            // we haven't created the root transition yet
            this._trns[trnsId] = trns;
        }
        else {
            // we already have a root transition created
            // add this new transition as a child to the root
            this._trns[trnsId].add(trns);
        }
        return trns;
    };
    TransitionController.prototype.destroy = function (trnsId) {
        var trans = this._trns[trnsId];
        if (trans) {
            trans.destroy();
            delete this._trns[trnsId];
        }
    };
    return TransitionController;
}());
export { TransitionController };
TransitionController.decorators = [
    { type: Injectable },
];
/** @nocollapse */
TransitionController.ctorParameters = function () { return [
    { type: Platform, },
    { type: Config, },
]; };
//# sourceMappingURL=transition-controller.js.map