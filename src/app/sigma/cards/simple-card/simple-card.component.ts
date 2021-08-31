import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sg-simple-card',
  templateUrl: './simple-card.component.html',
  styleUrls: ['./simple-card.component.scss'],
})
export class SimpleCardComponent implements OnInit {
  @Input() title: string;
  constructor() {}

  ngOnInit(): void {}
}
