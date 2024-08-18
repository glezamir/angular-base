import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, Observable, throwError } from "rxjs";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(private router: Router){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError((err) => {
console.log("interceptor -->");
console.log(err);
console.log("status: " + err.status + " statusText: " + err.statusText);
                if(
                    ["Unknown Error"].indexOf(err.statusText) !== -1
                ){
                    console.log("entro en navigateByUrl: /UERR");
                    this.router.navigateByUrl("/UERR");
                }else
                if(
                    [0, 401, 403, 404].indexOf(err.status) !== -1
                ){
console.log("entro en navigateByUrl: " + this.router.url + '/' + err.status);                    
                    // this.router.navigateByUrl('/' + err.status);
                    this.router.navigateByUrl('/' + err.status);
                }
                return throwError(() =>(err)); //actualizado por deprecated (V42 T08:40)
            })
        );
    }
}
