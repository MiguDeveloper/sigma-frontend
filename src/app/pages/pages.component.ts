import { SidebarService } from './sidebar/sidebar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [],
})
export class PagesComponent implements OnInit {
  hideNav = false;

  constructor(private sidebarService: SidebarService) {}

  ngOnInit(): void {
    this.sidebarService.showHide.subscribe((data) => (this.hideNav = data));
  }

  showHideNav(stateCheck = false) {
    this.hideNav = stateCheck;
  }
}
