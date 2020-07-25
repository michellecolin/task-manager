import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable} from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable()
export class JwtResponseInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          const authorization = event.headers.get('Authorization');
          console.log(authorization);
          if (authorization) {
            const token = authorization.replace('Bearer ', '');
            this.authService.token = token;
          }
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        console.log(error);
        return throwError(error);
      })
    );
  }
}
