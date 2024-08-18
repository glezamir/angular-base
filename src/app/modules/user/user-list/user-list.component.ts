import { Component, OnInit } from '@angular/core';
import { TblUserService } from '@data/services/pages/user/tbl-user.service';
import { SOLID_BUTTON_TYPE_ENUM } from '@shared/components/buttons/solid-button/solid-button-type.enum';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
//  providers: [TblUserService]    //Esta es la diferencia entre cargar los datos cada vez
                                 //  que se carga el componente, o No hacerlo, dado el código del servicio. 
})
export class UserListComponent implements OnInit {

  public $btnTypes = SOLID_BUTTON_TYPE_ENUM;

  constructor(public serviceTable: TblUserService) {}

  ngOnInit(){
    this.serviceTable.getData();
  }

  actions(type: SOLID_BUTTON_TYPE_ENUM){}



}
