import { NgModule, ModuleWithProviders } from '@angular/core';
import { UrlSerializer } from '@angular/router';
import { MobileUrlSerializer } from './url_tree_mobile';
import { WebUrlSerializer } from './url_tree_web';

@NgModule({})
export class We7MobileRouterModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: We7MobileRouterModule,
            providers: [
                {
                    provide: UrlSerializer,
                    useClass: MobileUrlSerializer
                }
            ]
        }
    }
}

@NgModule({})
export class We7WebRouterModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: We7WebRouterModule,
            providers: [
                {
                    provide: UrlSerializer,
                    useClass: WebUrlSerializer
                }
            ]
        }
    }
}

