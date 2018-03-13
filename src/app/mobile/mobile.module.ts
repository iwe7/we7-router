import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MobileRoutingModule } from './mobile-routing.module';
import { MobileRootComponent } from './mobile-root/mobile-root.component';
import { MobileWelcomeComponent } from './mobile-welcome/mobile-welcome.component';

@NgModule({
  imports: [
    CommonModule,
    MobileRoutingModule
  ],
  declarations: [MobileRootComponent, MobileWelcomeComponent]
})
export class MobileModule { }
