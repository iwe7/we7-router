(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/router', '@angular/common'], factory) :
	(factory((global.imeepos_tixian = {}),global.ng.core,global.ng.router,global.ng.common));
}(this, (function (exports,core,router,common) { 'use strict';

var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    return WelcomeComponent;
}());
WelcomeComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'app-welcome',
                template: "<p>\n  imeepos tixian mobile welcome works!\n</p>\n",
                styles: [""]
            },] },
];
WelcomeComponent.ctorParameters = function () { return []; };
var RootComponent = /** @class */ (function () {
    function RootComponent() {
    }
    RootComponent.prototype.ngOnInit = function () {
    };
    return RootComponent;
}());
RootComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'app-root',
                template: "\n<h2 class=\"title\">imeepos test mobile</h2>\n<ul>\n    <li>\n        <a routerLink=\"/app/entry/site/we7_router/index\">index</a>\n    </li>\n    <li>\n        <a routerLink=\"/app/entry/site/we7_router/home\">home</a>\n    </li>\n</ul>\n<router-outlet></router-outlet>\n",
                styles: [""]
            },] },
];
RootComponent.ctorParameters = function () { return []; };
var IndexComponent = /** @class */ (function () {
    function IndexComponent() {
    }
    IndexComponent.prototype.ngOnInit = function () {
    };
    return IndexComponent;
}());
IndexComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'app-index',
                template: "<p>\n  imeepos tixian mobile index works!\n</p>\n",
                styles: [""]
            },] },
];
IndexComponent.ctorParameters = function () { return []; };
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'app-home',
                template: "<p>\n  imeepos tixian mobile home works!\n</p>\n",
                styles: [""]
            },] },
];
HomeComponent.ctorParameters = function () { return []; };
var routes = [{
        path: '',
        component: RootComponent,
        children: [{
                path: '',
                component: WelcomeComponent
            }, {
                path: 'index',
                component: IndexComponent
            }, {
                path: 'home',
                component: HomeComponent
            }, {
                path: '**',
                component: WelcomeComponent
            }]
    }];
var MobileRoutingModule = /** @class */ (function () {
    function MobileRoutingModule() {
    }
    return MobileRoutingModule;
}());
MobileRoutingModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [router.RouterModule.forChild(routes)],
                exports: [router.RouterModule]
            },] },
];
MobileRoutingModule.ctorParameters = function () { return []; };
var MobileModule = /** @class */ (function () {
    function MobileModule() {
    }
    return MobileModule;
}());
MobileModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule,
                    MobileRoutingModule
                ],
                declarations: [WelcomeComponent, RootComponent, IndexComponent, HomeComponent]
            },] },
];
MobileModule.ctorParameters = function () { return []; };
var WelcomeComponent$1 = /** @class */ (function () {
    function WelcomeComponent$1() {
    }
    WelcomeComponent$1.prototype.ngOnInit = function () {
    };
    return WelcomeComponent$1;
}());
WelcomeComponent$1.decorators = [
    { type: core.Component, args: [{
                selector: 'app-welcome',
                template: "<p>\n  imeepos tixian web welcome works!\n</p>\n",
                styles: [""]
            },] },
];
WelcomeComponent$1.ctorParameters = function () { return []; };
var RootComponent$1 = /** @class */ (function () {
    function RootComponent$1() {
    }
    RootComponent$1.prototype.ngOnInit = function () {
    };
    return RootComponent$1;
}());
RootComponent$1.decorators = [
    { type: core.Component, args: [{
                selector: 'app-root',
                template: "\n<h2 class=\"title\">imeepos test web</h2>\n<ul>\n    <li>\n        <a routerLink=\"/web/site/entry/we7_router/index\">index</a>\n    </li>\n    <li>\n        <a routerLink=\"/web/site/entry/we7_router/home\">home</a>\n    </li>\n</ul>\n<router-outlet></router-outlet>\n",
                styles: [""]
            },] },
];
RootComponent$1.ctorParameters = function () { return []; };
var HomeComponent$1 = /** @class */ (function () {
    function HomeComponent$1() {
    }
    HomeComponent$1.prototype.ngOnInit = function () {
    };
    return HomeComponent$1;
}());
HomeComponent$1.decorators = [
    { type: core.Component, args: [{
                selector: 'app-home',
                template: "<p>\n  imeepos tixian web home works!\n</p>\n",
                styles: [""]
            },] },
];
HomeComponent$1.ctorParameters = function () { return []; };
var IndexComponent$1 = /** @class */ (function () {
    function IndexComponent$1() {
    }
    IndexComponent$1.prototype.ngOnInit = function () {
    };
    return IndexComponent$1;
}());
IndexComponent$1.decorators = [
    { type: core.Component, args: [{
                selector: 'app-index',
                template: "<p>\n  imeepos tixian web index works!\n</p>\n",
                styles: [""]
            },] },
];
IndexComponent$1.ctorParameters = function () { return []; };
var routes$1 = [{
        path: '',
        component: RootComponent$1,
        children: [{
                path: '',
                component: WelcomeComponent$1
            }, {
                path: 'index',
                component: IndexComponent$1
            }, {
                path: 'home',
                component: HomeComponent$1
            }, {
                path: '**',
                component: WelcomeComponent$1
            }]
    }];
var WebRoutingModule = /** @class */ (function () {
    function WebRoutingModule() {
    }
    return WebRoutingModule;
}());
WebRoutingModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [router.RouterModule.forChild(routes$1)],
                exports: [router.RouterModule]
            },] },
];
WebRoutingModule.ctorParameters = function () { return []; };
var WebModule = /** @class */ (function () {
    function WebModule() {
    }
    return WebModule;
}());
WebModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule,
                    WebRoutingModule
                ],
                declarations: [WelcomeComponent$1, RootComponent$1, HomeComponent$1, IndexComponent$1]
            },] },
];
WebModule.ctorParameters = function () { return []; };

exports.MobileModule = MobileModule;
exports.WebModule = WebModule;
exports.ɵe = HomeComponent;
exports.ɵd = IndexComponent;
exports.ɵa = MobileRoutingModule;
exports.ɵb = RootComponent;
exports.ɵc = WelcomeComponent;
exports.ɵj = HomeComponent$1;
exports.ɵi = IndexComponent$1;
exports.ɵg = RootComponent$1;
exports.ɵf = WebRoutingModule;
exports.ɵh = WelcomeComponent$1;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=imeepos_tixian.umd.js.map
