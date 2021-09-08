import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [],
})
export class PagesComponent implements OnInit {
  hideNav = false;
  constructor() {}

  ngOnInit(): void {}

  showHideNav(stateCheck = false) {
    this.hideNav = stateCheck;
  }
}
