(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/router', '@angular/common'], factory) :
	(factory((global.imeepos_tixian = {}),global.ng.core,global.ng.router,global.ng.common));
}(this, (function (exports,core,router,common) { 'use strict';

var routes = [{
        path: 'app/entry/site/imeepos-tixian',
        loadChildren: './imeepos-tixian-mobile/mobile.module#MobileModule',
    }, {
        path: 'web/site/entry/imeepos-tixian',
        loadChildren: './imeepos-tixian-web/web.module#WebModule',
    }];
var ImeeposTixianRoutingModule = /** @class */ (function () {
    function ImeeposTixianRoutingModule() {
    }
    return ImeeposTixianRoutingModule;
}());
ImeeposTixianRoutingModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [router.RouterModule.forChild(routes)],
                exports: [router.RouterModule]
            },] },
];
ImeeposTixianRoutingModule.ctorParameters = function () { return []; };
var ImeeposTixianModule = /** @class */ (function () {
    function ImeeposTixianModule() {
    }
    return ImeeposTixianModule;
}());
ImeeposTixianModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule,
                    ImeeposTixianRoutingModule
                ],
                declarations: []
            },] },
];
ImeeposTixianModule.ctorParameters = function () { return []; };
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
                template: "<router-outlet></router-outlet>",
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
var routes$1 = [{
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
                imports: [router.RouterModule.forChild(routes$1)],
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
                template: "<router-outlet></router-outlet>",
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
var routes$2 = [{
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
                imports: [router.RouterModule.forChild(routes$2)],
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

exports.ImeeposTixianModule = ImeeposTixianModule;
exports.MobileModule = MobileModule;
exports.WebModule = WebModule;
exports.ɵf = HomeComponent;
exports.ɵe = IndexComponent;
exports.ɵb = MobileRoutingModule;
exports.ɵc = RootComponent;
exports.ɵd = WelcomeComponent;
exports.ɵa = ImeeposTixianRoutingModule;
exports.ɵk = HomeComponent$1;
exports.ɵj = IndexComponent$1;
exports.ɵh = RootComponent$1;
exports.ɵg = WebRoutingModule;
exports.ɵi = WelcomeComponent$1;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=imeepos_tixian.umd.js.map
