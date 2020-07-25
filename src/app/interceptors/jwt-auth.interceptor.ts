import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Injectable()
export class JwtAuthInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let accessToken = this.authService.token;
    if (!accessToken) {
      accessToken = 'Basic ZGVtbzpzU2R4T1lEQU0zRkJO';
    } else {
      accessToken = `Bearer ${accessToken}`;
    }

    const cloned = req.clone({
      headers: req.headers.set('Authorization', accessToken)
    });
    return next.handle(cloned);
  }
}
