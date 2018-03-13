import { NgModule, Type, NgModuleFactory } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Observable } from 'rxjs/Observable';
// import { MobileModule } from './imeepos-tixian-mobile/mobile.module';
// import { WebModule } from './imeepos-tixian-web/web.module';
import { of } from 'rxjs/observable/of';

// export function loadMobileChildren(): Type<any> | NgModuleFactory<any> | Promise<Type<any>> | Observable<Type<any>> {
//   return of(MobileModule);
// }
// export function loadWebChildren(): Type<any> | NgModuleFactory<any> | Promise<Type<any>> | Observable<Type<any>> {
//   return of(WebModule);
// }

const routes: Routes = [{
  path: 'app/entry/site/imeepos-tixian',
  loadChildren: './imeepos-tixian-mobile/mobile.module#MobileModule',
  // loadChildren: loadMobileChildren
}, {
  path: 'web/site/entry/imeepos-tixian',
  loadChildren: './imeepos-tixian-web/web.module#WebModule',
  // loadChildren: loadWebChildren
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImeeposTixianRoutingModule { }
