//import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

//@Injectable()
export interface IFullTable {
    subjectTable: BehaviorSubject<{ data: any[] | null, total: number }> | null; //Datos de la tabla
 //Datos de la tabla
    /**
     * Get all data of table
     */
    //Datos de la tabla
    getData: () => void;
    getCurrentItems: any[] | null;
    initialData: { data: any[]; total: number; };
}