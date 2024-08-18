import { HttpEvent, 
         HttpHandler, 
         HttpInterceptor, 
         HttpRequest 
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { API_ROUTES } from "@data/constants/routes";
import { AuthService } from "@data/services/api/auth.service";
import { Observable } from "rxjs";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(private router: Router, private authService: AuthService){}

    intercept(
        req: HttpRequest<any>, 
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        const currentUser = this.authService.getUser;
        const isAuthenticated = currentUser && currentUser.token;
        if(isAuthenticated){
console.log("Interceptado Jwt. Adding Header >>");
            req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser?.token}`
                }
            });
        }else{
console.log("Interceptado Jwt. NO Header XX");
        }   
        return next.handle(req);
    }
}
