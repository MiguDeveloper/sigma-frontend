import { Config } from './../types/Config';
import { SidebarService } from './../sidebar.service';
import { Menu } from './../interfaces/menu-list.class';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-menu-list',
  templateUrl: './sidebar-menu-list.component.html',
  styleUrls: ['./sidebar-menu-list.component.scss'],
})
export class SidebarMenuListComponent implements OnInit {
  @Input() hideSidebar = false;
  menu: Menu;
  config: Config = { multi: false };

  constructor(private sidebarService: SidebarService) {}

  ngOnInit(): void {
    this.getMenu();
  }

  getMenu() {
    this.sidebarService.getMenuList().subscribe((menu) => (this.menu = menu));
  }

  toggle(idxGroup: number, idxItem: number) {
    let height = 400;
    const submenu = document.getElementById(`asSubmenu${idxGroup}${idxItem}`);
    const dropdown = document.getElementById(
      `menu__dropdown${idxGroup}${idxItem}`
    );
    const maxHeight = submenu.style.maxHeight;

    if (maxHeight || maxHeight === '400px') {
      height = 0;
    }

    if (maxHeight === '0px') {
      height = 400;
    }

    dropdown.classList.toggle('menu__dropdown--active');
    submenu.setAttribute('style', `max-height:${height}px`);
  }
}
