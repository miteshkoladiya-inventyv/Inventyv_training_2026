import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { runCli } from './cli-engine';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  output = '';

  onKeyDown(event: KeyboardEvent, input: HTMLInputElement) {
    if (event.key === 'Enter') {
      const command = input.value.trim();
      if (command) {
        this.output += `$ ${command}\n`;
        this.output += runCli(command);
      }
      input.value = '';
    }
  }
}
