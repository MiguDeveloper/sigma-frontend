import {
  Component,
  OnInit,
  HostListener,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'sg-navbar-item',
  templateUrl: './navbar-item.component.html',
  styleUrls: ['./navbar-item.component.scss'],
})
export class NavbarItemComponent implements OnInit {
  dentro = false;
  private wasInside = false;
  constructor() {}

  ngOnInit(): void {}

  @HostListener('click')
  clickInside() {
    this.dentro = true;
    this.wasInside = true;
  }

  @HostListener('document:click')
  clickOut() {
    if (!this.wasInside) {
      this.dentro = false;
    }
    this.wasInside = false;
  }
}
