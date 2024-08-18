import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-products-dialog',
  templateUrl: './products-dialog.component.html',
  styleUrls: ['./products-dialog.component.scss']
})
export class productsDialogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  eliminarPasatiempo(i: number){
    let a = i;
    alert(a);
  }

}
