import { Component, OnInit } from '@angular/core';
import { AuthService } from '@data/services/api/auth.service';

@Component({
  selector: 'app-page401',
  templateUrl: './page401.component.html',
  styleUrls: ['./page401.component.scss']
})
export class Page401Component implements OnInit {

  constructor(private authService: AuthService) { }  //Solo va el constructor

  ngOnInit(): void {
  }

  deslogearse_BORRAR(){
    this.authService.logout();
  }

}
