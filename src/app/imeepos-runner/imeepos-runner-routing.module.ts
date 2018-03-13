import { NgModule, Type, NgModuleFactory } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: 'app/entry/site/we7_router',
  loadChildren: 'app/imeepos-runner/tixian#MobileModule'
}, {
  path: 'web/site/entry/we7_router',
  loadChildren: 'app/imeepos-runner/tixian#WebModule'
}, {
  path: 'web/site/entry/imeepos-tixian',
  loadChildren: 'app/imeepos-runner/tixian#WebModule'
}, {
  path: 'app/entry/site/imeepos-tixian',
  loadChildren: 'app/imeepos-runner/tixian#MobileModule'
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImeeposRunnerRoutingModule { }
