import { Component } from '@angular/core';
import { Auth as AuthService } from '../../services/auth';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  user: any = null;
  error: string | null = null;

  constructor(private authService: AuthService) {}

  loadProfile() {
    this.authService.getProfile().subscribe({
      next: (res) => {
        this.user = res;
      },
      error: (err) => {
        this.error = err.message || 'Failed to load profile';
        console.error('Profile error:', err);
      }
    });
  }
}
