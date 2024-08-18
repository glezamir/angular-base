import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { INTERNAL_ROUTES } from '@data/constants/routes';
import { AuthService } from '@data/services/api/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService
  ){}

  canActivate(
    route: ActivatedRouteSnapshot, //contiene la data
    state: RouterStateSnapshot
  ): boolean 
  {
    
    const currentUser = this.authService.getUser;
console.log("++AuthGuard: canActivate: currentUser=> %o", this.authService.getUser);
console.log("++AuthGuard: canActivate: route.data['Permission']=> %o", route.data['Permission']);  //['permissions']
console.log("++AuthGuard: canActivate: Acceso concedido=> " + (route.data['Permission'] && this.authService.hasAccessToModule(route.data['Permission'])));
//    return true;

    if(currentUser) {

      if(route.data['Permission'] && this.authService.hasAccessToModule(route.data['Permission'])){
        //Se cumplio la condicion de acceso
        return true
      }else{
        //NO se cumplio la condicion de acceso
        this.router.navigateByUrl(INTERNAL_ROUTES.SERVER_E_401);
        return false;
      }     
    }
    //De no existir usuario logueado
    this.router.navigate([INTERNAL_ROUTES.AUTH_LOGIN], {
      queryParams: {returnUrl: state.url}
    });
    return false;
  }

  //// Config x defecto
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot
  // ): Observable<boolean | UrlTree> | 
  //    Promise<boolean | UrlTree> | 
  //    boolean | 
  //    UrlTree 
  // {
  //   return true;
  // }
  
}
