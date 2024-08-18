import { HttpClient } from '@angular/common/http';
import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ERRORS_CONST } from '@data/constants';
import { API_ROUTES, INTERNAL_ROUTES } from '@data/constants/routes';
import { PERMISSIONS_ENUM } from '@data/enum';
import { IApiUserAuthenticated } from '@data/interfaces';
import { BehaviorSubject, catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public currentUser: BehaviorSubject<IApiUserAuthenticated | null>;  //agregada la posibilidad de recibir NULL
  public userData: Observable<IApiUserAuthenticated | null>;
  public nameUserLS: string = 'currentUserProyBaseAngular';  //LS -> Local Storage

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) {
    this.currentUser = new BehaviorSubject(
      JSON.parse(localStorage.getItem(this.nameUserLS)!)  // ! -> non-null assertion operator. Le dice a JSON.parse() que su argumento nunca será null porque el desarrollador sabe lo que hace [ XD ]
    );
    this.userData = this.currentUser.asObservable();
  }

  get getUser(): IApiUserAuthenticated | null { //agregada la posibilidad de recibir NULL
    return this.currentUser.value;
  }

  hasAccessToModule(p: PERMISSIONS_ENUM) {


console.log("  --AuthService: hasAccessToModule: this.getUser=> %o", this.getUser);
console.log("  --AuthService: hasAccessToModule: p=> %o", p);
console.log("  --AuthService: hasAccessToModule: this.getUser.permissions[p]=> %o", this.getUser?.permissions[p]);
console.log("  --AuthService: hasAccessToModule: Acceso concedido: " + (this.getUser && this.getUser?.permissions[p] === 1));

    return this.getUser && this.getUser.permissions[p] === 1;

  }

  login(
    data: {
      userName: string;
      password: string;
    }
  ): Observable <{
    error: boolean;
    msg: string;
    data: any
  }> {
    const response = { error: true, msg: ERRORS_CONST.LOGIN.ERROR, data: null};

console.log("login(): URL de autenticacion: " + API_ROUTES.AUTH.LOGIN);
console.log("login(): Nombre (userName): " + data.userName + " Password (password): " + data.password);

    return this.httpClient.post<{error: boolean, msg: string, data: any}>(API_ROUTES.AUTH.LOGIN, data)
      .pipe(
        map(r => {


console.log("login(): Respuesta: %o", r.data);
console.log("------JSON.stringify(r.data): " + JSON.stringify(r.data));
          response.error = r.error;
          response.msg = r.msg;
          response.data = r.data;
          this.setUserToLocalStorage(r.data);
          this.currentUser.next(r.data);
          if(!response.error){
            this.router.navigateByUrl(INTERNAL_ROUTES.PANEL_USER_LIST);
          }
          return response;
        }),
        catchError( e => {
          return of(response);
        })
      );
  }

  logout(){
    localStorage.removeItem(this.nameUserLS);
    this.currentUser.next(null); //anulando el usuario
    this.router.navigateByUrl(INTERNAL_ROUTES.AUTH_LOGIN);
  }

  private setUserToLocalStorage(user: IApiUserAuthenticated){
    localStorage.setItem(this.nameUserLS, JSON.stringify(user));
  }

}
