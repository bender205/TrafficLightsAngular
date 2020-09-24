import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RegisterRequest } from '../../shared/models/RegisterRequest';

import { environment } from '../../../environments/environment';
import { User } from '../../shared/models/User';
import { LoginResponce } from '../../shared/models/LoginResponce';

@Injectable({ providedIn: 'root' })
export class AccountService {
    // private userSubject: BehaviorSubject<User>;
    public user: Observable<User>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        // this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
        // this.user = this.userSubject.asObservable();
    }

    public get getAccessToken(): string {
        return localStorage.getItem('accessToken');
    }



// return this.http.get<TrafficLight>(`/api/TrafficLight/${id}`);
    login(username, password): Observable<LoginResponce> {
          return this.http.post<LoginResponce>(`/api/users/login`, { username, password })
            .pipe(map(tokens => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('accessToken', tokens.accessToken);
                localStorage.setItem('refreshToken', tokens.refreshToken);
                return tokens;
            }));










        // return this.http.post<User>(`/api/users/login`, { username, password })
        //     .pipe(map(user => {
        //         // store user details and jwt token in local storage to keep user logged in between page refreshes
        //         localStorage.setItem('user', JSON.stringify(user));
        //         this.userSubject.next(user);
        //         return user;
        //     }));
    }

    logout(): void{
        // remove user from local storage and set current user to null
        localStorage.removeItem('accessToken');
        // this.userSubject.next(null);
        this.router.navigate(['/account/login']);
    }

    register(registerRequest: RegisterRequest) {
        return this.http.post(`api/users/register`, registerRequest);
    }
}
