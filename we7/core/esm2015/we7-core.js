import { Injectable, Injector, Inject } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { MenuService, SettingsService, TitleService, _HttpClient } from '@delon/theme';
import { ACLService } from '@delon/acl';
import { DA_SERVICE_TOKEN } from '@delon/auth';
import { Router } from '@angular/router';
import { of } from 'rxjs/observable/of';
import { mergeMap, catchError } from 'rxjs/operators';
import { NzMessageService } from 'ng-zorro-antd';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} parentModule
 * @param {?} moduleName
 * @return {?}
 */
function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(`${moduleName} has already been loaded. Import Core modules in the AppModule only.`);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class We7Service {
    constructor() {
        this.queryParams = {};
        this.queryParams = this.parseURL();
    }
    /**
     * @return {?}
     */
    parseURL() {
        const /** @type {?} */ ret = {};
        const /** @type {?} */ seg = location.search.replace(/^\?/, '').split('&').filter(function (v, i) {
            if (v !== '' && v.indexOf('=')) {
                return true;
            }
        });
        seg.forEach((element, index) => {
            const /** @type {?} */ idx = element.indexOf('=');
            const /** @type {?} */ key = element.substring(0, idx);
            const /** @type {?} */ val = element.substring(idx + 1);
            ret[key] = val;
        });
        return ret;
    }
    /**
     * @param {?} queryParams
     * @return {?}
     */
    setQuerParams(queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    get(name) {
        return this.queryParams[name];
    }
    /**
     * @param {?=} _params
     * @return {?}
     */
    getUrl(_params = {}) {
        let /** @type {?} */ url = this.serializeQueryParams(Object.assign({}, this.queryParams, _params));
        return `${url}`;
    }
    /**
     * @param {?} _do
     * @param {?=} _params
     * @return {?}
     */
    getMobileUrl(_do, _params = {}) {
        _params['a'] = 'site';
        _params['c'] = 'entry';
        _params['i'] = this.get('i') ? this.get('i') : '2';
        _params['do'] = _do;
        return `${location.protocol}//${location.host}/app/index.php${this.getUrl(_params)}`;
    }
    /**
     * @param {?} _do
     * @param {?=} _params
     * @return {?}
     */
    getWebUrl(_do, _params = {}) {
        _params['a'] = 'entry';
        _params['c'] = 'site';
        _params['i'] = this.get('i') ? this.get('i') : '2';
        _params['do'] = _do;
        return `${location.protocol}//${location.host}/web/index.php${this.getUrl(_params)}`;
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
We7Service.decorators = [
    { type: Injectable },
];
/** @nocollapse */
We7Service.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class StartupService {
    /**
     * @param {?} menuService
     * @param {?} settingService
     * @param {?} aclService
     * @param {?} titleService
     * @param {?} tokenService
     * @param {?} httpClient
     * @param {?} injector
     * @param {?} we7
     */
    constructor(menuService, settingService, aclService, titleService, tokenService, httpClient, injector, we7) {
        this.menuService = menuService;
        this.settingService = settingService;
        this.aclService = aclService;
        this.titleService = titleService;
        this.tokenService = tokenService;
        this.httpClient = httpClient;
        this.injector = injector;
        this.we7 = we7;
    }
    /**
     * @return {?}
     */
    load() {
        let /** @type {?} */ url = this.we7.getWebUrl('open', { open: 'appconfig' });
        this.httpClient.get(url).subscribe(res => {
            console.log(res);
        });
    }
}
StartupService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
StartupService.ctorParameters = () => [
    { type: MenuService, },
    { type: SettingsService, },
    { type: ACLService, },
    { type: TitleService, },
    { type: undefined, decorators: [{ type: Inject, args: [DA_SERVICE_TOKEN,] },] },
    { type: HttpClient, },
    { type: Injector, },
    { type: We7Service, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * 默认HTTP拦截器，其注册细节见 `app.module.ts`
 */
class DefaultInterceptor {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        this.injector = injector;
    }
    /**
     * @return {?}
     */
    get msg() {
        return this.injector.get(NzMessageService);
    }
    /**
     * @param {?} url
     * @return {?}
     */
    goTo(url) {
        setTimeout(() => this.injector.get(Router).navigateByUrl(url));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handleData(event) {
        // 可能会因为 `throw` 导出无法执行 `_HttpClient` 的 `end()` 操作
        this.injector.get(_HttpClient).end();
        // 业务处理：一些通用操作
        switch (event.status) {
            case 200:
                // 业务层级错误处理，以下假如响应体的 `status` 若不为 `0` 表示业务级异常
                // 并显示 `error_message` 内容
                // const body: any = event instanceof HttpResponse && event.body;
                // if (body && body.status !== 0) {
                //     this.msg.error(body.error_message);
                //     // 继续抛出错误中断后续所有 Pipe、subscribe 操作，因此：
                //     // this.http.get('/').subscribe() 并不会触发
                //     return ErrorObservable.throw(event);
                // }
                break;
            case 401:
                // 未登录状态码
                this.goTo('/passport/login');
                break;
            case 403:
            case 404:
            case 500:
                this.goTo(`/${event.status}`);
                break;
        }
        return of(event);
    }
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    intercept(req, next) {
        let /** @type {?} */ url = req.url;
        const /** @type {?} */ newReq = req.clone({
            url: url
        });
        return next.handle(newReq).pipe(mergeMap((event) => {
            if (event instanceof HttpResponse && event.status === 200)
                return this.handleData(event);
            return of(event);
        }), catchError((err) => this.handleData(err)));
    }
}
DefaultInterceptor.decorators = [
    { type: Injectable },
];
/** @nocollapse */
DefaultInterceptor.ctorParameters = () => [
    { type: Injector, },
];

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

export { throwIfAlreadyLoaded, We7Service, StartupService, DefaultInterceptor };
//# sourceMappingURL=we7-core.js.map
