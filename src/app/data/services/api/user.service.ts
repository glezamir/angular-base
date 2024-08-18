import { Injectable } from '@angular/core';
import { IApiUser } from '@data/interfaces';
import { ApiClass } from '@data/schema/ApiClass.class';
import { ICardUser } from '@shared/components/cards/card-user/icard-user.metadata';
import { catchError, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService extends ApiClass{   // 

  /**
   * Get all user from api
   * @returns { error: boolean, msg: string, data: IApiUser[] }
   */
  getAllUsers(): Observable<{
    error: boolean;
    msg: string;
    data: IApiUser[] | null;
  }> {

console.info("UserService: getAllUsers: URL-> " + this.url + '/spr/user/');

    const response : {
      error: boolean; 
      msg: string; 
      data: IApiUser[];
    } = {error: false, msg:'', data: []};
    return this.httpClient.get<IApiUser[]>(this.url + '/spr/user/')
    .pipe(
      map( r => {       
        response.data = r;
console.info("UserService: getAllUsers: GET: cantidad -> " + r.length + " <-------");
        return response;
      }),
      catchError(this.error)
    );
  }

  getUserById(id: number): Observable<{
    error: boolean, 
    msg: string, 
    data: IApiUser | null
  }> {
    const response: {
      error: boolean, 
      msg: string, 
      data: IApiUser | null
    } = {
      error: false, 
      msg: '', 
      data: null};
    return this.httpClient.get<IApiUser | null>(this.url + '/spr/user/detail',{params: {id: id} })  // this.url + '/spr/user/detail?id=' + id
      .pipe(
        map(r => {
            response.data = r;
            return response;
        }),
        catchError(this.error)
      );
  }




//   /**
//    * Get all user from api
//    * @returns { error: boolean, msg: string, data: ICardUser[] | null }
//    */
//   getAllUsers(): Observable<{
//     error: boolean,
//     msg: string,
//     data: ICardUser[] | null
//   }> {
// alert ("URL: " + this.url + " httpClient: " + this.httpClient);
// console.info("URL-> " + this.url + '/spr/user/');
// console.info("httpClient-> " + this.httpClient);

//     const response : {
//       error: boolean, 
//       msg: string, 
//       data: ICardUser[] | null
//     } = {error: false, msg:'', data: null};
//     return this.httpClient.get<ICardUser[]>(this.url + '/spr/user/')
//     .pipe(
//       map( r => {
// console.info("r----> " + r);        
//         response.data = r;
//         return response;
//       }),
//       catchError(this.error)
//     );
//   }
}
