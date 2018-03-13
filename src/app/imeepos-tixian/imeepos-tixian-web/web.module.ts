import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebRoutingModule } from './web-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { RootComponent } from './root/root.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  imports: [
    CommonModule,
    WebRoutingModule
  ],
  declarations: [WelcomeComponent, RootComponent, HomeComponent, IndexComponent]
})
export class WebModule { }
