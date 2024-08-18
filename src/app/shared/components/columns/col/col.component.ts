import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { FullTableClass } from '@shared/components/tables/full-table/schema/full-table-class';
import { IColumn } from './icol.metadata';

@Component({
  selector: 'app-col',
  templateUrl: './col.component.html',
  styleUrls: ['./col.component.scss']
})
export class ColComponent implements OnInit {

  @Input() sizes: IColumn = {xs: 12};
  @Input() classes = '';
  @HostBinding('class') class = '';

  ngOnInit(): void {
    this.class = this.getSizes(this.sizes);
  }

  getSizes(sizes: IColumn): string {
    let fclass = this.classes;
    for (const k in sizes) {
      if(Object.prototype.hasOwnProperty.call(sizes, k)) {
        fclass += ` col-${k}-${sizes[k as keyof IColumn]}`; //  col-${k}-${sizes[k]}
      }
    }

console.info("       fclass::: " + fclass);    
    return fclass;
  }
  

}
