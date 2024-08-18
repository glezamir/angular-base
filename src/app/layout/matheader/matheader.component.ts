import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-matheader',
  templateUrl: './matheader.component.html',
  styleUrls: ['./matheader.component.scss']
})
export class MatheaderComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  //Header
  public onToggleSidenav = () => { 
    this.sidenavToggle.emit();
  }
  //Header

}
