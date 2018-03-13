import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: 'app/entry/site/imeepos-tixian',
  loadChildren: 'app/imeepos-tixian/mobile/mobile.module#MobileModule'
}, {
  path: 'web/site/entry/imeepos-tixian',
  loadChildren: 'app/imeepos-tixian/web/web.module#WebModule'
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImeeposTixianRoutingModule { }
