import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit{
  items:MenuItem[] |undefined;
  sidebarVisible = false;
  constructor(private router: Router) { }
  ngOnInit(): void {
   
  }
  onShowSidebar($event: any) {
    console.log($event)
  }
  onHideSidebar($event: any) {
    console.log($event)
  }
  sidebarChange($event: any) {
    console.log($event)
  }
  logOut() {
    console.log("h")
    sessionStorage.clear();
    this.router.navigate(['login']);
  }
}
