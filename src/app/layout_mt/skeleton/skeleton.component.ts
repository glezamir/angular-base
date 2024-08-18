import { Component, OnInit, ViewChild } from '@angular/core';
//import { LoginComponent } from '@modules/auth/login'

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.scss']
})
export class SkeletonComponent implements OnInit {



  menu_icon: string = "menu";

  constructor() { }

  ngOnInit(): void {
  }

  sidenavOpening() {
    this.menu_icon = "close";
  }

  sidenavClosing() {
    this.menu_icon = "menu";
  }

}
