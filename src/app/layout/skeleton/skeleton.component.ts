import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthService } from '@data/services/api/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.scss']
})
export class SkeletonComponent {

  @ViewChild('sidenav') sidenav_comp!: MatSidenav;

  menu_icon: string = "menu";

  //Datos de usuario logeado
  //Datos de usuario logeado

  public userSubscription?: Subscription;
    public userName?: String;
    public userPosition?: String;
    public userAvatar?: String;

  constructor(authService: AuthService) {  }

  sidenavOpening() {
    this.menu_icon = "close";
  }

  sidenavClosing() {
    this.menu_icon = "menu";
  }


}
