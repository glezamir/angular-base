import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-h1',
  templateUrl: './title-h1.component.html',
  styleUrls: ['./title-h1.component.scss']
})
export class TitleH1Component implements OnInit {
  // Se llama de este modo: <app-title-h1 type = "secondary" text = "Lista de usuarios"></app-title-h1>
  //  De ser tipo primary: <app-title-h1 text = "Lista de usuarios"></app-title-h1> 
  @Input() text = '';
  @Input() type: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'dark' = 'primary';

  constructor() { }

  ngOnInit(): void {
  }

}
