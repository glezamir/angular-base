import { Component, Input, OnInit } from '@angular/core';
import { IFullTable } from '@shared/components';
import { FullTableClass } from './schema/full-table-class';
import { FullTableService } from './services/full-table.service';

@Component({
  selector: 'app-full-table',
  templateUrl: './full-table.component.html',
  styleUrls: ['./full-table.component.scss']
})
export class FullTableComponent implements OnInit {
  @Input() service!: IFullTable;
  public tableService!: FullTableService;
  constructor() { }

  ngOnInit(): void {
    this.tableService = new FullTableService(this.service);
console.info("FullTableComponent: ngOnInit() -> this.tableService.initData()  <-----------------");
    this.tableService.initData();
  }

}
