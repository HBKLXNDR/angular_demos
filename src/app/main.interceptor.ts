import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError} from "rxjs/operators"
import {AuthService} from "./services";
import {Router} from "@angular/router";

@Injectable()
export class MainInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService, private router: Router) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): any {
    const isAuthenticated = this.authService.isAuthorization();

    if (isAuthenticated) {
      request = this.addToken(request, this.authService.getToken())
    }
    return next.handle(request).pipe(
      // @ts-ignore
      catchError((res: HttpErrorResponse) => {
        if (res && res.error && res.status === 401) {
          this.authService.deleteToken()
          this.router.navigate(["login"])
        }
      })
    );
  }

  addToken(request: HttpRequest<any>, token: string): HttpRequest<any> {
    return request.clone({
      setHeaders: {Authorization: `Bearer ${token}`}
    })
  }
}
