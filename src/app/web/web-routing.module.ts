import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebRootComponent } from './web-root/web-root.component';
import { WebWelcomeComponent } from './web-welcome/web-welcome.component';

const routes: Routes = [{
  path: '',
  component: WebRootComponent,
  children: [
    {
      path: '',
      component: WebWelcomeComponent
    },
    {
      path: '*/*',
      component: WebWelcomeComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }
