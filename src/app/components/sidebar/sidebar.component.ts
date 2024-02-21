import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  sidebarVisible = false;
  onShowSidebar($event: any) {
    console.log($event)
  }
  onHideSidebar($event: any) {
    console.log($event)
  }
  sidebarChange($event: any) {
    console.log($event)
  }
}
