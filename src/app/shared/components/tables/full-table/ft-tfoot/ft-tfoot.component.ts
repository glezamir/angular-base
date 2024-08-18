import { Component, Input } from '@angular/core';
import { FullTableService } from '../services/full-table.service';

@Component({
  selector: 'tfoot[app-ft-tfoot]',
  templateUrl: './ft-tfoot.component.html',
  styleUrls: ['./ft-tfoot.component.scss']
})
export class FtTfootComponent {

  @Input() tableService!: FullTableService;

}
