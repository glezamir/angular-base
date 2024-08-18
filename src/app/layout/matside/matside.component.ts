import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '@data/services/api/auth.service';

@Component({
  selector: 'app-matside',
  templateUrl: './matside.component.html',
  styleUrls: ['./matside.component.scss']
})
export class MatsideComponent implements OnInit {

@Output() matsideEvtToggle = new EventEmitter();

//@Output() public menuiconToggle = new EventEmitter();

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  public toggleSidenav = () => {

    this.matsideEvtToggle.emit();

    //this.menuiconToggle.emit();

  }

  public sidenavLogout = () => {
    this.authService.logout();
  }

}
