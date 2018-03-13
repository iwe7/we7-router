import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent, AppSetting, AppDetail, AppHome, ChildrenPage } from './app.component';
import { RouterModule, UrlSerializer } from '@angular/router';
import { MeepoUrlSerializer } from './we7-router/public_api';
// import { ImeeposTixianModule } from './imeepos-tixian/public_api';
import { ImeeposRunnerModule } from './imeepos-runner/imeepos-runner.module';
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
    ImeeposRunnerModule,
    RouterModule.forRoot([]),
    // ImeeposTixianModule
  ],
  providers: [{
    provide: UrlSerializer,
    useClass: MeepoUrlSerializer
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
