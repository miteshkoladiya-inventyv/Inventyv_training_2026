import { Component } from '@angular/core';
import { Auth as AuthService } from '../../services/auth';
import { FormsModule } from '@angular/forms';
import { switchMap } from 'rxjs';
import { JsonPipe } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})

export class Login {
  username = 'emilys';
  password = 'emilyspass';
  userProfile: any = null; 

  constructor(private authService: AuthService) {}
  

  login() {
    this.authService.login(this.username, this.password)
      .pipe(
        switchMap(() => this.authService.getProfile())
      )
      .subscribe({
        next: (profile) => {
          console.log('Login successful and profile loaded');
          this.userProfile = profile;
        },
        error: (err) => {
          console.error('Login or profile loading failed', err);
        }
      });
  }

  refreshToken() {
    return this.authService.refreshToken();
  }

  getAccessToken() {
    return this.authService.getAccessToken();
  }

  logout(){
    this.authService.logout();
    this.userProfile = null;
  }  
}