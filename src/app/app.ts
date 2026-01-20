import { Component, Input, signal } from '@angular/core';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { Profile } from './profile/profile';
import { Counter } from './counter/counter';
import { Events } from './events/events';
import { InputvalueGetSet } from './inputvalue-get-set/inputvalue-get-set';
import { FirstForm } from './first-form/first-form';
import { IfElse } from './if-else/if-else';

@Component({
  selector: 'app-root',
  imports: [Login, Signup,Profile,Counter,Events,InputvalueGetSet,FirstForm,IfElse],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-app-angular');
  click_Function() {
    alert("Button Clicked - Going to Login Page");
  }
}
