import { SigmaModule } from './../sigma/sigma.module';
import { RouterModule } from '@angular/router';
import { SidebarModule } from './sidebar/sidebar.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [PagesComponent, NavbarComponent, FooterComponent],
  imports: [
    CommonModule,
    SigmaModule,
    RouterModule,
    SidebarModule,
    PagesRoutingModule,
  ],
})
export class PagesModule {}
