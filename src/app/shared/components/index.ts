//Import components
import { SolidButtonComponent } from "./buttons/solid-button/solid-button.component";
import { CardUserComponent } from "./cards/card-user/card-user.component";
import { FtTheadComponent } from "./tables/full-table/ft-thead/ft-thead.component";
import { FtTbodyComponent } from "./tables/full-table/ft-tbody/ft-tbody.component";
import { FtTfootComponent } from "./tables/full-table/ft-tfoot/ft-tfoot.component";
import { FullTableComponent } from "./tables/full-table/full-table.component";
import { TitleH1Component } from "./titles/title-h1/title-h1.component";
import { RowComponent } from "./columns/row/row.component";
import { ColComponent } from "./columns/col/col.component";

export const components: any[] = [
    CardUserComponent,
    TitleH1Component,
    //Loaders
        //No se ha creado
    //Buttons
    SolidButtonComponent,
    //Tables
    FullTableComponent,
    FtTheadComponent,
    FtTbodyComponent,
    FtTfootComponent,
    //Columns
    RowComponent, 
    ColComponent

];

//Export all components (Para que puedan ser utilizados en otros módulos)
export * from './cards/card-user/card-user.component';
export * from './titles/title-h1/title-h1.component';
//Buttons
export * from './buttons/solid-button/solid-button.component';
//Tables
export * from "./tables/full-table/ft-thead/ft-thead.component";
export * from "./tables/full-table/ft-tbody/ft-tbody.component";
export * from "./tables/full-table/ft-tfoot/ft-tfoot.component";
export *
 from "./tables/full-table/full-table.component";
export *
 from "./tables/full-table/ifull-table.metadata";
//Columnas
export * from "./columns/row/row.component";
export * from "./columns/col/col.component";