import { SidebarService } from './../sidebar.service';
import { Menu } from './../interfaces/menu-list.class';
import { Component, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sg-sidebar-menu-list',
  templateUrl: './sidebar-menu-list.component.html',
  styleUrls: ['./sidebar-menu-list.component.scss'],
})
export class SidebarMenuListComponent implements OnInit {
  hideSidebar = false;
  menu: Menu;

  constructor(private sidebarService: SidebarService) {}

  ngOnInit(): void {
    this.getMenu();
  }

  getMenu() {
    this.sidebarService.getMenuList().subscribe((menu) => (this.menu = menu));
    this.sidebarService.showHide.subscribe((data) => (this.hideSidebar = data));
  }

  toggle(idxGroup: number, idxItem: number) {
    let height = 600;
    const submenu = document.getElementById(`asSubmenu${idxGroup}${idxItem}`);
    const dropdown = document.getElementById(
      `menu__dropdown${idxGroup}${idxItem}`
    );
    const maxHeight = submenu.style.maxHeight;

    if (maxHeight === '600px') {
      height = 0;
    }

    if (maxHeight === '0px') {
      height = 600;
    }

    const isActiveSubmenu = submenu.classList.contains('active-menu');
    if (!isActiveSubmenu) {
      dropdown.classList.toggle('menu__dropdown--active');
      submenu.setAttribute('style', `max-height:${height}px`);
    }
  }

  closeSidebarToggle() {
    this.hideSidebar = !this.hideSidebar;
    this.sidebarService.showHide.emit(this.hideSidebar);
  }
}
