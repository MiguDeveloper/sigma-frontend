import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { SigmaModule } from './../sigma/sigma.module';
import { RouterModule } from '@angular/router';
import { SidebarModule } from './sidebar/sidebar.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarItemComponent } from './navbar/navbar-item/navbar-item.component';

@NgModule({
  declarations: [PagesComponent, NavbarComponent, FooterComponent, NavbarItemComponent],
  imports: [
    CommonModule,
    SigmaModule,
    RouterModule,
    SidebarModule,
    PagesRoutingModule,
    BrowserAnimationsModule,
    TooltipModule.forRoot(),
    BsDropdownModule.forRoot(),
  ],
})
export class PagesModule {}
