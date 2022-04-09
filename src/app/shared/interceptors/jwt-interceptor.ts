import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const userToken = localStorage.getItem('token');

    if (userToken) {
      const authReq = req.clone({
        setHeaders: { Authentication: `Bearer ${userToken}` },
      });

      return next.handle(authReq);
    } else return next.handle(req);
  }
}
