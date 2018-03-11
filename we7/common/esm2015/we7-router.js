import { Injectable, NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class We7HelperService {
    /**
     * @param {?} router
     */
    constructor(router) {
        this.router = router;
        this.queryParams = {};
        this.parseUrl();
    }
    /**
     * @return {?}
     */
    parseUrl() {
        let /** @type {?} */ tree = this.router.parseUrl(location.search);
        this.queryParams = tree.queryParams;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    get(name) {
        this.parseUrl();
        return this.queryParams[name];
    }
    /**
     * @param {?} _do
     * @param {?=} _params
     * @return {?}
     */
    getUrl(_do, _params = {}) {
        this.queryParams['do'] = _do;
        this.queryParams = Object.assign({}, this.queryParams, _params);
        let /** @type {?} */ url = this.serializeQueryParams(this.queryParams);
        return `${url}`;
    }
    /**
     * @param {?} _do
     * @param {?=} _params
     * @return {?}
     */
    getMobileUrl(_do, _params = {}) {
        _params['c'] = 'entry';
        _params['a'] = 'site';
        _params['i'] = this.get('i') ? this.get('i') : '2';
        return `${location.protocol}//${location.host}/app/index.php` + this.getUrl(_do, _params);
    }
    /**
     * @param {?} _do
     * @param {?=} _params
     * @return {?}
     */
    getWebUrl(_do, _params = {}) {
        return `${location.protocol}//${location.host}/web/index.php` + this.getUrl(_do, _params);
    }
    /**
     * @param {?} params
     * @return {?}
     */
    serializeQueryParams(params) {
        const /** @type {?} */ strParams = Object.keys(params).map((name) => {
            const /** @type {?} */ value = params[name];
            return Array.isArray(value) ?
                value.map(v => `${this.encodeUriQuery(name)}=${this.encodeUriQuery(v)}`).join('&') :
                `${this.encodeUriQuery(name)}=${this.encodeUriQuery(value)}`;
        });
        return strParams.length ? `?${strParams.join("&")}` : '';
    }
    /**
     * @param {?} s
     * @return {?}
     */
    encodeUriQuery(s) {
        return this.encodeUriString(s).replace(/%3B/gi, ';');
    }
    /**
     * @param {?} s
     * @return {?}
     */
    encodeUriString(s) {
        return encodeURIComponent(s)
            .replace(/%40/g, '@')
            .replace(/%3A/gi, ':')
            .replace(/%24/g, '$')
            .replace(/%2C/gi, ',');
    }
}
We7HelperService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
We7HelperService.ctorParameters = () => [
    { type: Router, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class We7CommonModule {
}
We7CommonModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    RouterModule
                ],
                exports: [],
                declarations: [],
                providers: [
                    We7HelperService
                ],
            },] },
];
/** @nocollapse */
We7CommonModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { We7CommonModule, We7HelperService };
//# sourceMappingURL=we7-router.js.map
