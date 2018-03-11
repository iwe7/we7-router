import { Injectable, NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

var We7HelperService = /** @class */ (function () {
    function We7HelperService(router) {
        this.router = router;
        this.queryParams = {};
        this.parseUrl();
    }
    We7HelperService.prototype.parseUrl = function () {
        var tree = this.router.parseUrl(location.search);
        this.queryParams = tree.queryParams;
    };
    We7HelperService.prototype.get = function (name) {
        this.parseUrl();
        return this.queryParams[name];
    };
    We7HelperService.prototype.getUrl = function (_do, _params) {
        if (_params === void 0) { _params = {}; }
        this.queryParams['do'] = _do;
        this.queryParams = Object.assign({}, this.queryParams, _params);
        var url = this.serializeQueryParams(this.queryParams);
        return "" + url;
    };
    We7HelperService.prototype.getMobileUrl = function (_do, _params) {
        if (_params === void 0) { _params = {}; }
        _params['c'] = 'entry';
        _params['a'] = 'site';
        _params['i'] = this.get('i') ? this.get('i') : '2';
        return location.protocol + "//" + location.host + "/app/index.php" + this.getUrl(_do, _params);
    };
    We7HelperService.prototype.getWebUrl = function (_do, _params) {
        if (_params === void 0) { _params = {}; }
        return location.protocol + "//" + location.host + "/web/index.php" + this.getUrl(_do, _params);
    };
    We7HelperService.prototype.serializeQueryParams = function (params) {
        var _this = this;
        var strParams = Object.keys(params).map(function (name) {
            var value = params[name];
            return Array.isArray(value) ?
                value.map(function (v) { return _this.encodeUriQuery(name) + "=" + _this.encodeUriQuery(v); }).join('&') :
                _this.encodeUriQuery(name) + "=" + _this.encodeUriQuery(value);
        });
        return strParams.length ? "?" + strParams.join("&") : '';
    };
    We7HelperService.prototype.encodeUriQuery = function (s) {
        return this.encodeUriString(s).replace(/%3B/gi, ';');
    };
    We7HelperService.prototype.encodeUriString = function (s) {
        return encodeURIComponent(s)
            .replace(/%40/g, '@')
            .replace(/%3A/gi, ':')
            .replace(/%24/g, '$')
            .replace(/%2C/gi, ',');
    };
    return We7HelperService;
}());
We7HelperService.decorators = [
    { type: Injectable },
];
We7HelperService.ctorParameters = function () { return [
    { type: Router, },
]; };
var We7CommonModule = /** @class */ (function () {
    function We7CommonModule() {
    }
    return We7CommonModule;
}());
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
We7CommonModule.ctorParameters = function () { return []; };

export { We7CommonModule, We7HelperService };
//# sourceMappingURL=we7-common.js.map
