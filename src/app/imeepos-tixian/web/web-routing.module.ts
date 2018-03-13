import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { RootComponent } from './root/root.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [{
  path: '',
  component: RootComponent,
  children: [{
    path: '',
    component: WelcomeComponent
  }, {
    path: 'index',
    component: IndexComponent
  }, {
    path: 'home',
    component: HomeComponent
  }, {
    path: '**',
    component: WelcomeComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }
