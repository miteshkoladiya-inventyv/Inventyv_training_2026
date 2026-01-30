import { Component } from '@angular/core';
import { User } from './user-card/user-card.component';
import { UserCardComponent } from './user-card/user-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'user-profile-card';

  user: User = {
    name: 'Mitesh',
    age: 24,
    avatarUrl: 'https://gravatar.com/avatar/42caa3b9a72d380c17aa440c668d345c?s=200&d=robohash&r=x',
    isActive: true
  };

  onStatusChanged(status: boolean) {
    this.user = {
      ...this.user,
      isActive: status
    };
  }
}
