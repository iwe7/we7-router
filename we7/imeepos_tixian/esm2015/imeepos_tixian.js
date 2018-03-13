import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class WelcomeComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
WelcomeComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-welcome',
                template: `<p>
  imeepos tixian mobile welcome works!
</p>
`,
                styles: [``]
            },] },
];
/** @nocollapse */
WelcomeComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class RootComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
RootComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-root',
                template: `<router-outlet></router-outlet>`,
                styles: [``]
            },] },
];
/** @nocollapse */
RootComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class IndexComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
IndexComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-index',
                template: `<p>
  imeepos tixian mobile index works!
</p>
`,
                styles: [``]
            },] },
];
/** @nocollapse */
IndexComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class HomeComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
HomeComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-home',
                template: `<p>
  imeepos tixian mobile home works!
</p>
`,
                styles: [``]
            },] },
];
/** @nocollapse */
HomeComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const routes = [{
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
class MobileRoutingModule {
}
MobileRoutingModule.decorators = [
    { type: NgModule, args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule]
            },] },
];
/** @nocollapse */
MobileRoutingModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MobileModule {
}
MobileModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    MobileRoutingModule
                ],
                declarations: [WelcomeComponent, RootComponent, IndexComponent, HomeComponent]
            },] },
];
/** @nocollapse */
MobileModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class WelcomeComponent$1 {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
WelcomeComponent$1.decorators = [
    { type: Component, args: [{
                selector: 'app-welcome',
                template: `<p>
  imeepos tixian web welcome works!
</p>
`,
                styles: [``]
            },] },
];
/** @nocollapse */
WelcomeComponent$1.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class RootComponent$1 {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
RootComponent$1.decorators = [
    { type: Component, args: [{
                selector: 'app-root',
                template: `<router-outlet></router-outlet>`,
                styles: [``]
            },] },
];
/** @nocollapse */
RootComponent$1.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class HomeComponent$1 {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
HomeComponent$1.decorators = [
    { type: Component, args: [{
                selector: 'app-home',
                template: `<p>
  imeepos tixian web home works!
</p>
`,
                styles: [``]
            },] },
];
/** @nocollapse */
HomeComponent$1.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class IndexComponent$1 {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
IndexComponent$1.decorators = [
    { type: Component, args: [{
                selector: 'app-index',
                template: `<p>
  imeepos tixian web index works!
</p>
`,
                styles: [``]
            },] },
];
/** @nocollapse */
IndexComponent$1.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const routes$1 = [{
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
class WebRoutingModule {
}
WebRoutingModule.decorators = [
    { type: NgModule, args: [{
                imports: [RouterModule.forChild(routes$1)],
                exports: [RouterModule]
            },] },
];
/** @nocollapse */
WebRoutingModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class WebModule {
}
WebModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    WebRoutingModule
                ],
                declarations: [WelcomeComponent$1, RootComponent$1, HomeComponent$1, IndexComponent$1]
            },] },
];
/** @nocollapse */
WebModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @return {?}
 */
function loadMobileChildren() {
    return MobileModule;
}
/**
 * @return {?}
 */
function loadWebChildren() {
    return WebModule;
}
const routes$2 = [{
        path: 'app/entry/site/imeepos-tixian',
        loadChildren: loadMobileChildren
    }, {
        path: 'web/site/entry/imeepos-tixian',
        loadChildren: loadWebChildren
    }];
class ImeeposTixianRoutingModule {
}
ImeeposTixianRoutingModule.decorators = [
    { type: NgModule, args: [{
                imports: [RouterModule.forChild(routes$2)],
                exports: [RouterModule]
            },] },
];
/** @nocollapse */
ImeeposTixianRoutingModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ImeeposTixianModule {
}
ImeeposTixianModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ImeeposTixianRoutingModule
                ],
                declarations: []
            },] },
];
/** @nocollapse */
ImeeposTixianModule.ctorParameters = () => [];

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

export { ImeeposTixianModule, MobileModule, WebModule, ImeeposTixianRoutingModule as ɵc, loadMobileChildren as ɵa, loadWebChildren as ɵb, HomeComponent as ɵh, IndexComponent as ɵg, MobileRoutingModule as ɵd, RootComponent as ɵe, WelcomeComponent as ɵf, HomeComponent$1 as ɵm, IndexComponent$1 as ɵl, RootComponent$1 as ɵj, WebRoutingModule as ɵi, WelcomeComponent$1 as ɵk };
//# sourceMappingURL=imeepos_tixian.js.map
