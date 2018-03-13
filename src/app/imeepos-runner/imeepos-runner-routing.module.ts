import { NgModule, Type, NgModuleFactory } from '@angular/core';
import { Routes, RouterModule, LoadChildrenCallback } from '@angular/router';
import { MobileModule, WebModule } from 'imeepos_tixian';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';

export function loadMobileChildren(): Type<any> | NgModuleFactory<any> | Promise<Type<any>> | Observable<Type<any>> {
  return of(MobileModule);
}
export function loadWebChildren(): Type<any> | NgModuleFactory<any> | Promise<Type<any>> | Observable<Type<any>> {
  return of(WebModule);
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
export class ImeeposRunnerRoutingModule { }
