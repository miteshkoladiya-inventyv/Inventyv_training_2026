import { Component, signal } from '@angular/core';
import { Login } from "./components/login/login";
import { Profile } from './components/profile/profile';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Login, Profile],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Interceptor-task');
}
