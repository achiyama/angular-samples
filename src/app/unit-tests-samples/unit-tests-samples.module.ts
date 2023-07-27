import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnitTestsSamplesRoutingModule } from './unit-tests-samples-routing.module';
import { LightSwitchComponent } from './light-switch/light-switch.component';

@NgModule({
  declarations: [LightSwitchComponent],
  imports: [CommonModule, UnitTestsSamplesRoutingModule],
})
export class UnitTestsSamplesModule {}
