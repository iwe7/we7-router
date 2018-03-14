(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http'), require('@delon/theme'), require('@delon/acl'), require('@delon/auth'), require('@angular/router'), require('rxjs/observable/of'), require('rxjs/operators'), require('ng-zorro-antd')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common/http', '@delon/theme', '@delon/acl', '@delon/auth', '@angular/router', 'rxjs/observable/of', 'rxjs/operators', 'ng-zorro-antd'], factory) :
	(factory((global['we7-core'] = {}),global.ng.core,global.ng.common.http,global.theme,global.acl,global.auth,global.ng.router,global.Rx.Observable,global.Rx.Observable.prototype,global.ngZorroAntd));
}(this, (function (exports,core,http,theme,acl,auth,router,of,operators,ngZorroAntd) { 'use strict';

function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(moduleName + " has already been loaded. Import Core modules in the AppModule only.");
    }
}
var We7Service = /** @class */ (function () {
    function We7Service() {
        this.queryParams = {};
        this.queryParams = this.parseURL();
    }
    We7Service.prototype.parseURL = function () {
        var ret = {};
        var seg = location.search.replace(/^\?/, '').split('&').filter(function (v, i) {
            if (v !== '' && v.indexOf('=')) {
                return true;
            }
        });
        seg.forEach(function (element, index) {
            var idx = element.indexOf('=');
            var key = element.substring(0, idx);
            var val = element.substring(idx + 1);
            ret[key] = val;
        });
        return ret;
    };
    We7Service.prototype.setQuerParams = function (queryParams) {
        this.queryParams = queryParams;
        return this;
    };
    We7Service.prototype.get = function (name) {
        return this.queryParams[name];
    };
    We7Service.prototype.getUrl = function (_params) {
        if (_params === void 0) { _params = {}; }
        var url = this.serializeQueryParams(Object.assign({}, this.queryParams, _params));
        return "" + url;
    };
    We7Service.prototype.getMobileUrl = function (_do, _params) {
        if (_params === void 0) { _params = {}; }
        _params['a'] = 'site';
        _params['c'] = 'entry';
        _params['i'] = this.get('i') ? this.get('i') : '2';
        _params['do'] = _do;
        return location.protocol + "//" + location.host + "/app/index.php" + this.getUrl(_params);
    };
    We7Service.prototype.getWebUrl = function (_do, _params) {
        if (_params === void 0) { _params = {}; }
        _params['a'] = 'entry';
        _params['c'] = 'site';
        _params['i'] = this.get('i') ? this.get('i') : '2';
        _params['do'] = _do;
        return location.protocol + "//" + location.host + "/web/index.php" + this.getUrl(_params);
    };
    We7Service.prototype.serializeQueryParams = function (params) {
        var _this = this;
        var strParams = Object.keys(params).map(function (name) {
            var value = params[name];
            return Array.isArray(value) ?
                value.map(function (v) { return _this.encodeUriQuery(name) + "=" + _this.encodeUriQuery(v); }).join('&') :
                _this.encodeUriQuery(name) + "=" + _this.encodeUriQuery(value);
        });
        return strParams.length ? "?" + strParams.join("&") : '';
    };
    We7Service.prototype.encodeUriQuery = function (s) {
        return this.encodeUriString(s).replace(/%3B/gi, ';');
    };
    We7Service.prototype.encodeUriString = function (s) {
        return encodeURIComponent(s)
            .replace(/%40/g, '@')
            .replace(/%3A/gi, ':')
            .replace(/%24/g, '$')
            .replace(/%2C/gi, ',');
    };
    return We7Service;
}());
We7Service.decorators = [
    { type: core.Injectable },
];
We7Service.ctorParameters = function () { return []; };
var StartupService = /** @class */ (function () {
    function StartupService(menuService, settingService, aclService, titleService, tokenService, httpClient, injector, we7) {
        this.menuService = menuService;
        this.settingService = settingService;
        this.aclService = aclService;
        this.titleService = titleService;
        this.tokenService = tokenService;
        this.httpClient = httpClient;
        this.injector = injector;
        this.we7 = we7;
    }
    StartupService.prototype.load = function () {
        var url = this.we7.getWebUrl('open', { open: 'appconfig' });
        this.httpClient.get(url).subscribe(function (res) {
            console.log(res);
        });
    };
    return StartupService;
}());
StartupService.decorators = [
    { type: core.Injectable },
];
StartupService.ctorParameters = function () { return [
    { type: theme.MenuService, },
    { type: theme.SettingsService, },
    { type: acl.ACLService, },
    { type: theme.TitleService, },
    { type: undefined, decorators: [{ type: core.Inject, args: [auth.DA_SERVICE_TOKEN,] },] },
    { type: http.HttpClient, },
    { type: core.Injector, },
    { type: We7Service, },
]; };
var DefaultInterceptor = /** @class */ (function () {
    function DefaultInterceptor(injector) {
        this.injector = injector;
    }
    Object.defineProperty(DefaultInterceptor.prototype, "msg", {
        get: function () {
            return this.injector.get(ngZorroAntd.NzMessageService);
        },
        enumerable: true,
        configurable: true
    });
    DefaultInterceptor.prototype.goTo = function (url) {
        var _this = this;
        setTimeout(function () { return _this.injector.get(router.Router).navigateByUrl(url); });
    };
    DefaultInterceptor.prototype.handleData = function (event) {
        this.injector.get(theme._HttpClient).end();
        switch (event.status) {
            case 200:
                break;
            case 401:
                this.goTo('/passport/login');
                break;
            case 403:
            case 404:
            case 500:
                this.goTo("/" + event.status);
                break;
        }
        return of.of(event);
    };
    DefaultInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        var url = req.url;
        var newReq = req.clone({
            url: url
        });
        return next.handle(newReq).pipe(operators.mergeMap(function (event) {
            if (event instanceof http.HttpResponse && event.status === 200)
                return _this.handleData(event);
            return of.of(event);
        }), operators.catchError(function (err) { return _this.handleData(err); }));
    };
    return DefaultInterceptor;
}());
DefaultInterceptor.decorators = [
    { type: core.Injectable },
];
DefaultInterceptor.ctorParameters = function () { return [
    { type: core.Injector, },
]; };

exports.throwIfAlreadyLoaded = throwIfAlreadyLoaded;
exports.We7Service = We7Service;
exports.StartupService = StartupService;
exports.DefaultInterceptor = DefaultInterceptor;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=we7-core.umd.js.map
