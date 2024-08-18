import { Inject } from '@angular/core';
import { Injectable } from '@angular/core';
import { IFullTable } from '../ifull-table.metadata';
import { FullTableClass } from '../schema/full-table-class';

// @Injectable({  //No es inyectable, para crear instancias
//   providedIn: 'root'
// })
export class FullTableService {
  //public service: IFullTable;

  constructor(
    public service: IFullTable
  ) { }

  initData(){
// console.info("FullTableService: initData() | service = " + this.service + "<-----------------");
// console.info("FullTableService: initData() | service.getCurrentItems = " + this.service.getCurrentItems + "<-----------------");
    if(this.service.getCurrentItems!.length <= 0){
console.info("FullTableService: initData() -> this.getData() <-----------------");
      this.getData();
    }else{
console.info("FullTableService: initData() -> NO SE ACCEDIO A: this.getData() >>>this.service.getCurrentItems!.length: " + this.service.getCurrentItems!.length + " <-----------------");
    }
  }

  getData() {
    this.service.getData();
  }

  get getMessageFooter(): string {
    return (this.service.getCurrentItems!.length <= 0) ? 'No hay registros' : `${this.service.getCurrentItems!.length} registros.`;
  }
}
