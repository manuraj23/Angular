import { Component, signal } from '@angular/core';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { Profile } from './profile/profile';
import { Counter } from './counter/counter';

@Component({
  selector: 'app-root',
  imports: [Login, Signup,Profile,Counter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-app-angular');
  click_Function() {
    alert("Button Clicked - Going to Login Page");
  }
}
