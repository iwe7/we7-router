import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent, AppSetting, AppDetail, AppHome, ChildrenPage } from './app.component';
import { RouterModule, UrlSerializer } from '@angular/router';
import { MeepoUrlSerializer } from './we7-router/public_api';
@NgModule({
  declarations: [
    AppComponent,
    AppSetting,
    AppDetail,
    AppHome,
    ChildrenPage
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{
      path: 'web',
      children: [{
        path: 'imeepos_test',
        loadChildren: 'app/imeepos_test/web/web-router#WebRouterModule'
      }]
    }, {
      path: 'app',
      children: [{
        path: 'imeepos_test',
        loadChildren: 'app/imeepos_test/mobile/mobile-router#MobileRouterModule'
      }]
    }])
  ],
  providers: [{
    provide: UrlSerializer,
    useClass: MeepoUrlSerializer
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
