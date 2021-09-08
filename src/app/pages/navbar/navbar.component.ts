import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'sg-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Output() toggleMenu = new EventEmitter();
  private hideSidebar =
    JSON.parse(localStorage.getItem('hideSidebar')) || false;

  constructor() {}

  ngOnInit(): void {}

  toggleAction() {
    this.hideSidebar = !this.hideSidebar;
    localStorage.setItem('hideSidebar', JSON.stringify(this.hideSidebar));
    this.toggleMenu.emit(this.hideSidebar);
  }
}
