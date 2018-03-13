import { NgModule } from '@angular/core';
import { RouterModule, UrlSerializer } from '@angular/router';
import { MobileRouter } from './router';
import { IndexComponent } from './index/index';
import { HomeComponent } from './home/home';
@NgModule({
    imports: [
        RouterModule.forChild([{
            path: '',
            component: MobileRouter,
            children: [{
                path: '',
                component: IndexComponent
            }, {
                path: 'index',
                component: IndexComponent
            }, {
                path: 'home',
                component: HomeComponent
            }]
        }])
    ],
    exports: [],
    declarations: [
        MobileRouter,
        IndexComponent,
        HomeComponent
    ],
    providers: [],
})
export class MobileRouterModule { }
