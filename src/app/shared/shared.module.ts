import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import * as fromComponents from './components';
import { TitleH1Component } from './components/titles/title-h1/title-h1.component';
import { CardUserComponent } from './components/cards/card-user/card-user.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule  //para utilizar los 'routerLink' en el <div>, x ejemplo
  ],
  declarations: [...fromComponents.components, TitleH1Component, CardUserComponent],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule,
    ...fromComponents.components
  ],
  providers: [
//    {provide: IFullTable, useClass: FullTableClass} 
  ]
})

export class SharedModule { }
