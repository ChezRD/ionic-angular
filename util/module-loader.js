import { Injectable, InjectionToken, Injector } from '@angular/core';
import { NgModuleLoader } from './ng-module-loader';
import { requestIonicCallback } from './util';
export var LAZY_LOADED_TOKEN = new InjectionToken('LZYCMP');
/**
 * @hidden
 */
var ModuleLoader = (function () {
    function ModuleLoader(_ngModuleLoader, _injector) {
        this._ngModuleLoader = _ngModuleLoader;
        this._injector = _injector;
        /** @internal */
        this._cfrMap = new Map();
        this._promiseMap = new Map();
    }
    ModuleLoader.prototype.load = function (modulePath) {
        var _this = this;
        (void 0) /* console.time */;
        var splitString = modulePath.split(SPLITTER);
        return new Promise(function (resolve) {
            var promise = _this._promiseMap.get(modulePath);
            var resolvePromisedModule = function (loadedModule) {
                (void 0) /* console.timeEnd */;
                var ref = loadedModule.create(_this._injector);
                var component = ref.injector.get(LAZY_LOADED_TOKEN);
                _this._cfrMap.set(component, ref.componentFactoryResolver);
                resolve({
                    componentFactoryResolver: ref.componentFactoryResolver,
                    component: component
                });
            };
            var generatePromise = function (splitString) {
                var promise = _this._ngModuleLoader.load(splitString[0], splitString[1]);
                _this._promiseMap.set(modulePath, promise);
                return promise;
            };
            if (!promise) {
                promise = generatePromise(splitString);
                promise.catch(function () {
                    _this._promiseMap.delete(modulePath);
                    promise = generatePromise(splitString);
                    promise.then(function (loadedModule) { return resolvePromisedModule(loadedModule); });
                });
            }
            promise.then(function (loadedModule) { return resolvePromisedModule(loadedModule); });
        });
    };
    ModuleLoader.prototype.getComponentFactoryResolver = function (component) {
        return this._cfrMap.get(component);
    };
    return ModuleLoader;
}());
export { ModuleLoader };
ModuleLoader.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ModuleLoader.ctorParameters = function () { return [
    { type: NgModuleLoader, },
    { type: Injector, },
]; };
var SPLITTER = '#';
/**
 * @hidden
 */
export function provideModuleLoader(ngModuleLoader, injector) {
    return new ModuleLoader(ngModuleLoader, injector);
}
/**
 * @hidden
 */
export function setupPreloadingImplementation(config, deepLinkConfig, moduleLoader) {
    if (!deepLinkConfig || !deepLinkConfig.links || !config.getBoolean('preloadModules')) {
        return Promise.resolve();
    }
    var linksToLoad = deepLinkConfig.links.filter(function (link) { return !!link.loadChildren && link.priority !== 'off'; });
    // Load the high priority modules first
    var highPriorityPromises = linksToLoad
        .filter(function (link) { return link.priority === 'high'; })
        .map(function (link) { return moduleLoader.load(link.loadChildren); });
    return Promise.all(highPriorityPromises).then(function () {
        // Load the low priority modules after the high priority are done
        var lowPriorityPromises = linksToLoad
            .filter(function (link) { return link.priority === 'low'; })
            .map(function (link) { return moduleLoader.load(link.loadChildren); });
        return Promise.all(lowPriorityPromises);
    }).catch(function (err) {
        console.error(err.message);
    });
}
/**
 * @hidden
 */
export function setupPreloading(config, deepLinkConfig, moduleLoader, ngZone) {
    return function () {
        requestIonicCallback(function () {
            ngZone.runOutsideAngular(function () {
                setupPreloadingImplementation(config, deepLinkConfig, moduleLoader);
            });
        });
    };
}
//# sourceMappingURL=module-loader.js.map