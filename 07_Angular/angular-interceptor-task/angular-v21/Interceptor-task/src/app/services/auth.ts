import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  username: string;
  email: string;
}

@Injectable({ providedIn: 'root' })
export class Auth {

  private _accessToken = signal<string | null>(null);
  private _refreshToken = signal<string | null>(null);

  accessToken = this._accessToken.asReadonly();
  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post<LoginResponse>(
      'https://dummyjson.com/auth/login',
      { username, password }
    ).pipe(
      tap(res => {
        this._accessToken.set(res.accessToken);
        this._refreshToken.set(res.refreshToken);
        console.log('✅ Logged in');
        console.log(this._accessToken());
      })
    );
  }

  getProfile() {
    return this.http.get('https://dummyjson.com/auth/me');
  }

  refreshToken() {
    return this._refreshToken();
  }

  getAccessToken() {
    return this._accessToken();
  }

  logout() {
    this._accessToken.set(null);
    this._refreshToken.set(null);
    console.log('logged out');
  }
}
