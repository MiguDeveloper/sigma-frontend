import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss'],
})
export class GeneralComponent implements OnInit {
  title = 'General';
  constructor() {}

  ngOnInit(): void {}

  onClickButton(typeButton: string) {
    console.log(`onClickButton: ${typeButton}`);
  }
}
