import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterBadgeComponent } from './counter-badge/counter-badge.component';
import { ButtonComponent } from './button/button.component';
import { SimpleCardComponent } from './cards/simple-card/simple-card.component';
import { AlertsComponent } from './alerts/alerts.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

@NgModule({
  declarations: [
    CounterBadgeComponent,
    ButtonComponent,
    SimpleCardComponent,
    AlertsComponent,
  ],
  imports: [CommonModule, TooltipModule.forRoot()],
  exports: [
    CounterBadgeComponent,
    ButtonComponent,
    SimpleCardComponent,
    AlertsComponent,
  ],
})
export class SigmaModule {}
