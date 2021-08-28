import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarMenuListComponent } from './sidebar-menu-list/sidebar-menu-list.component';
import { SidebarMobileComponent } from './sidebar-mobile/sidebar-mobile.component';

@NgModule({
  declarations: [SidebarMenuListComponent, SidebarMobileComponent],
  imports: [CommonModule, RouterModule],
  exports: [SidebarMenuListComponent, SidebarMobileComponent],
})
export class SidebarModule {}
