import { Component, signal } from '@angular/core';
import { UserCardComponent } from './user-card-component/user-card-component';
import { User } from './user-card-component/user-card-component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';



@Component({
  selector: 'app-root',
  imports: [UserCardComponent, MatCardModule, MatButtonModule, MatInputModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // protected readonly title = signal('user-profile-card');
  
  user = signal<User>({
    name:'hello',
    age:21,
    avatarUrl:"https://gravatar.com/avatar/19ebcae0564dcb96612230b1856b8ed2?s=200&d=robohash&r=x",
    isActive:true
  });


    onStatusChanged(status: boolean) {
    this.user.update(u => ({ ...u, isActive: status }));
  }
}