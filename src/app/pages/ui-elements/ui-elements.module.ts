import { SigmaModule } from './../../sigma/sigma.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiElementsRoutingModule } from './ui-elements-routing.module';
import { GeneralComponent } from './general/general.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

@NgModule({
  declarations: [GeneralComponent],
  imports: [
    CommonModule,
    SigmaModule,
    UiElementsRoutingModule,
    TooltipModule.forRoot(),
  ],
  exports: [GeneralComponent],
})
export class UiElementsModule {}
