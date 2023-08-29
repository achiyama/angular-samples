import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnitTestsSamplesRoutingModule } from './unit-tests-samples-routing.module';
import { LightSwitchComponent } from './light-switch/light-switch.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [LightSwitchComponent, WelcomeComponent],
  imports: [CommonModule, UnitTestsSamplesRoutingModule],
})
export class UnitTestsSamplesModule {}
