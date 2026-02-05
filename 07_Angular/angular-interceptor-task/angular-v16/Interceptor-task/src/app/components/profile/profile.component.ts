import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule, JsonPipe, CommonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user: any;
  error: string | null = null;

  constructor(private authService: AuthService) { }

  loadProfile() {
    this.authService.getProfile().subscribe({
      next: (res) => {
        console.log('User Profile:', res);
        this.user = res;
      },
      error: (err) => {
        console.error('Profile error:', err);
          this.error = 'Failed to load profile';
      }
    });
  }
}
