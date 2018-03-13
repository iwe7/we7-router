import { NgModule, Type, NgModuleFactory } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MobileModule } from './mobile/mobile.module';
import { WebModule } from './web/web.module';
import { Observable } from 'rxjs/Observable';

export function loadMobileChildren(): Type<any> | NgModuleFactory<any> | Promise<Type<any>> | Observable<Type<any>> {
  return MobileModule;
}
export function loadWebChildren(): Type<any> | NgModuleFactory<any> | Promise<Type<any>> | Observable<Type<any>> {
  return WebModule;
}
const routes: Routes = [{
  path: 'app/entry/site/imeepos-tixian',
  loadChildren: loadMobileChildren
}, {
  path: 'web/site/entry/imeepos-tixian',
  loadChildren: loadWebChildren
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImeeposTixianRoutingModule { }
