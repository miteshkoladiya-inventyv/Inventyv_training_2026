import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = 'emilys';
  password: string = 'emilyspass';

  constructor(private authService: AuthService){}

  login(){
    this.authService.login(this.username, this.password).subscribe();
  }

  getaccessToken(){
    return this.authService.getAccessToken();
  }

  logout(){
    this.authService.logout();
  }

}
