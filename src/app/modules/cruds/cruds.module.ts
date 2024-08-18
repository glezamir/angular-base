import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { productsComponent } from './products/data/products.component';
import { CRUDsRoutingModule } from './cruds-routing.module';
import { SharedModule } from '@shared/shared.module';
import { productsDialogComponent } from './products/dialog/products-dialog.component';
//Forms
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    productsComponent,
    productsDialogComponent
  ],
  imports: [
//    CommonModule
    SharedModule,  //Modulo común, compartido con todo
    CRUDsRoutingModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class CRUDsModule { }
