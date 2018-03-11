import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent, AppSetting, AppDetail, AppHome, ChildrenPage } from './app.component';
import { RouterModule, UrlSerializer } from '@angular/router';
import { WebUrlSerializer } from './we7-router/public_api';
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
      path: 'setting',
      component: AppSetting
    }, {
      path: 'home',
      component: AppHome
    }, {
      path: 'detail',
      component: AppDetail
    }, {
      path: 'children',
      children: [{
        path: '',
        component: AppSetting
      }, {
        path: 'home',
        component: AppHome
      }]
    }])
  ],
  providers: [{
    provide: UrlSerializer,
    useClass: WebUrlSerializer
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
