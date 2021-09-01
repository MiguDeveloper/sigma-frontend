import { SgAlertType } from './alerts.interfaces';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sg-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss'],
})
export class AlertsComponent implements OnInit {
  @Input() message = '';
  @Input() dismissible = false;
  @Input() type = SgAlertType.Primary;
  @Input() showIcon = false;

  types = SgAlertType;
  closeAlert = false;

  constructor() {}

  ngOnInit(): void {}
}
