
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {tap} from 'rxjs';

export interface LoginResponse{
    username:string,
  email:string,
  accessToken:string,
  refreshToken:string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    private accessToken: string | null = null;
  private refreshToken: string | null = null;

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post<LoginResponse>('https://dummyjson.com/auth/login', { username, password })
      .pipe(
        tap(res => {
          this.accessToken = res.accessToken;
          this.refreshToken = res.refreshToken;
          console.log('✅ Logged in');
          console.log(this.accessToken);
        })
      );
  }

  getProfile(){
    return this.http.get('https://dummyjson.com/auth/me');
  }

  getAccessToken(): string | null {
    return this.accessToken;
    console.log(this.accessToken);
  } 

  logout(){
    this.accessToken = null;
    this.refreshToken = null;
    console.log('logged out');
  }
}
