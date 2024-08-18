import { Component, OnInit } from '@angular/core';
import { AuthService } from '@data/services/api/auth.service';

@Component({
  selector: 'app-page-unk-err',
  templateUrl: './page-unk-err.component.html',
  styleUrls: ['./page-unk-err.component.scss']
})
export class PageUnkErrComponent implements OnInit {

  constructor(private authService: AuthService) { } //Solo va el constructor

  ngOnInit(): void {
  }

  deslogearse_BORRAR(){
    this.authService.logout();
  }

}
