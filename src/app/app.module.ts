import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent, AppSetting, AppDetail, AppHome, ChildrenPage } from './app.component';
import { RouterModule, UrlSerializer } from '@angular/router';
import { MeepoUrlSerializer } from './we7-router/public_api';
import { ImeeposTixianModule } from './imeepos-tixian/imeepos-tixian.module';
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
    ImeeposTixianModule,
    RouterModule.forRoot([{
      path: 'web',
      loadChildren: 'app/web/web.module#WebModule'
    }, {
      path: 'app',
      loadChildren: 'app/mobile/mobile.module#MobileModule'
    }, {
      path: 'web/home',
      loadChildren: 'app/web/home/home.module#HomeModule'
    }])
  ],
  providers: [{
    provide: UrlSerializer,
    useClass: MeepoUrlSerializer
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
