import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterBadgeComponent } from './counter-badge/counter-badge.component';
import { ButtonComponent } from './button/button.component';
import { SimpleCardComponent } from './cards/simple-card/simple-card.component';

@NgModule({
  declarations: [CounterBadgeComponent, ButtonComponent, SimpleCardComponent],
  imports: [CommonModule],
  exports: [CounterBadgeComponent, ButtonComponent, SimpleCardComponent],
})
export class SigmaModule {}
