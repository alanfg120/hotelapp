import { Injectable, NgModule } from "@angular/core";
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from "@angular/common/http";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { AuthService } from "./app/login/services/auth.service";


@Injectable()
export class HttpsErrorInterceptor implements HttpInterceptor {
  constructor(public auth: AuthService/* ,private socket:SocketService */) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError(err => {
        if (err.status === 401) {
           //this.socket.socket.disconnect(true)
           this.auth.loginout();
          
           
        }

        //const error = err.error.message || err.statusText;
        return throwError(err);
      })
    );
  }
}
@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpsErrorInterceptor,
      multi: true
    }
  ]
})
export class ErrorInterceptor {}
