import { EventEmitter, Output } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sg-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() type = 'button';
  @Input() size = 'md';
  @Input() buttonStyle = 'primary';
  @Input() customClass = '';
  @Input() block: boolean;
  @Input() disabled: boolean;
  @Output() clicked = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  get btnBlockClass() {
    return this.block ? 'btn--block' : '';
  }
}
