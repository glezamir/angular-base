import { Injectable } from '@angular/core';
import { IApiUser } from '@data/interfaces'; //Es valido por la exportacion en 'index.ts' de 'data/interfaces/index.ts'. De lo contrario deberia ser: "import { IApiUser } from '@data/interfaces/api/iapi-user.metadata';"
import { UserService } from '@data/services/api/user.service';
import { FullTableClass } from '@shared/components/tables/full-table/schema/full-table-class';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TblUserService extends FullTableClass {

  constructor(
    private userService: UserService
  ) {
      super();
      this.subjectTable = new BehaviorSubject<{
        data: IApiUser[] | null,
        total: number
      }>(this.initialData);
    }

  override getData(): void {
console.log("TblUserService: getData() <-----------------||||||||||||");
    this.userService.getAllUsers().subscribe(r => {
      this.subjectTable.next({data: r.data, total: r.data!.length});
//console.log("TblUserService: getData(): subjectTable: " + this.subjectTable + " <-----------------");
    })
  }

  override get getCurrentItems(): IApiUser[] | null {
//console.log("TblUserService: getCurrentItems(): subjectTable.value.data: " + this.subjectTable.value.data + " <-----------------");
    return this.subjectTable.value.data;
  }
}
