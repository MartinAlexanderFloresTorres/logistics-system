import { Injectable, inject } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { LoginResponse } from '../interfaces';
import { HttpClient } from '@angular/common/http';
import { HttpBackendClient } from '../../../config';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _http: HttpClient = inject(HttpBackendClient);
  private _user: LoginResponse | null = null;
  private _router = inject(Router);

  public get user() {
    const user = localStorage.getItem('user');
    return this._user || (user ? JSON.parse(user) : null);
  }

  public login(username: string, password: string): Observable<LoginResponse | null> {
    return this._http.post<LoginResponse>('/auth/login', { username, password }).pipe(
      catchError(() => of(null)),
      tap((res) => {
        if (res) {
          this._user = res;
          localStorage.setItem('token', this._user.token);
          localStorage.setItem('user', JSON.stringify(res));
          this._router.navigateByUrl('/dashboard');
        }
      })
    );
  }

  public logout() {
    this._user = null;
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this._router.navigateByUrl('/auth/login');
  }
}
