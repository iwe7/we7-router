import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MobileRootComponent } from './mobile-root/mobile-root.component';
import { MobileWelcomeComponent } from './mobile-welcome/mobile-welcome.component';

const routes: Routes = [
  {
    path: '',
    component: MobileRootComponent,
    children: [
      {
        path: '',
        component: MobileWelcomeComponent
      },
      // {
      //   path: '**',
      //   component: MobileWelcomeComponent
      // }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MobileRoutingModule { }
