import { Component } from '@angular/core';
import { User } from './user-card/user-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'user-profile-card';

  user: User = {
    name: 'Mitesh',
    age: 24,
    avatarUrl: 'https://gravatar.com/avatar/106433bdd7764faad0258728d2c57921?s=200&d=robohash&r=x',
    isActive: true
  };

  onStatusChanged(status: boolean) {
    this.user = {
      ...this.user,
      isActive: status
    };
    console.log(this.user);
  }
}
