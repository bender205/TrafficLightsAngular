import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {AccountService} from '../../api/services/account.service';

@Injectable()
export class InterseptorJwt implements HttpInterceptor {
  constructor(private accountService: AccountService) { }
  accessToken: string;
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      // add auth header with jwt if user is logged in and request is to api url
      this.accessToken = this.accountService.getAccessToken;
     // const isLoggedIn = user && user.token;
      const isApiUrl = request.url.startsWith('/api/TrafficLight');
      // if (isLoggedIn && isApiUrl) {
      request = request.clone({
              setHeaders: {
                  Authorization: 'Bearer' +  `${this.accessToken}`
              }
          });
     // }
      console.log('request from jwt interseptor' + request.headers);
      return next.handle(request);
  }
}
