import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MobileRoutingModule } from './mobile-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { RootComponent } from './root/root.component';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    MobileRoutingModule
  ],
  declarations: [WelcomeComponent, RootComponent, IndexComponent, HomeComponent]
})
export class MobileModule { }
