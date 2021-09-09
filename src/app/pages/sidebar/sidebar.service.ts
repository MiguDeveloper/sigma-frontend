import { Menu } from './interfaces/menu-list.class';
import { SidebarItems } from './../../helpers/data/sidebar-stub';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  showHide = new EventEmitter<boolean>();
  constructor() {}

  getMenuList(): Observable<Menu> {
    return SidebarItems.getMenu().pipe(
      map((menu: Menu) => {
        menu.groups.sort((a, b) => {
          a.order = a.order || 0;
          b.order = b.order || 0;
          return a.order - b.order;
        });
        menu.groups.forEach((group) => {
          group.items.forEach((item) => {
            if (item?.items?.length) {
              item.items.sort((a, b) => {
                a.order = a.order || 0;
                b.order = b.order || 0;
                return a.order - b.order;
              });
            }
          });
        });
        return menu;
      })
    );
  }
}
