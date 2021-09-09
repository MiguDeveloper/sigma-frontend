import { SidebarService } from './../sidebar/sidebar.service';
import {
  Component,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'sg-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  private hideSidebar = false;
  screenWidth: number;

  constructor(private sidebarService: SidebarService) {}

  ngOnInit(): void {
    this.getScreenSize();
    if (this.screenWidth <= 783) {
      this.hideSidebar = true;
      setTimeout(() => {
        this.sidebarService.showHide.emit(this.hideSidebar);
      }, 500);
    }

    this.sidebarService.showHide.subscribe((data) => {
      this.hideSidebar = data;
      console.log('data: ', data);
      console.log('hideSidebar: ', this.hideSidebar);
    });
  }

  toggleAction() {
    this.hideSidebar = !this.hideSidebar;
    this.sidebarService.showHide.emit(this.hideSidebar);
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenWidth = window.innerWidth;
    console.log(this.screenWidth);
  }
}
