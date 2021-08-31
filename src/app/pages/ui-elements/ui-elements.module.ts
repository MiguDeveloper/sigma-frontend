import { SigmaModule } from './../../sigma/sigma.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiElementsRoutingModule } from './ui-elements-routing.module';
import { GeneralComponent } from './general/general.component';

@NgModule({
  declarations: [GeneralComponent],
  imports: [CommonModule, SigmaModule, UiElementsRoutingModule],
  exports: [GeneralComponent],
})
export class UiElementsModule {}
