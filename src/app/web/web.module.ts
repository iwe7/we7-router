import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebRoutingModule } from './web-routing.module';
import { WebRootComponent } from './web-root/web-root.component';
import { WebWelcomeComponent } from './web-welcome/web-welcome.component';

@NgModule({
  imports: [
    CommonModule,
    WebRoutingModule
  ],
  declarations: [WebRootComponent, WebWelcomeComponent]
})
export class WebModule { }
