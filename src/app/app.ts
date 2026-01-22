import { Component, effect, Input, signal } from '@angular/core';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { Profile } from './profile/profile';
import { Counter } from './counter/counter';
import { Events } from './events/events';
import { InputvalueGetSet } from './inputvalue-get-set/inputvalue-get-set';
import { FirstForm } from './first-form/first-form';
import { IfElse } from './if-else/if-else';
import { ElseIf } from './else-if/else-if';
import { SwitchCase } from './switch-case/switch-case';
import { ForLoop } from './for-loop/for-loop';
import { Signals } from './signals/signals';
import { ComputedSignals } from './computed-signals/computed-signals';
import { Effects } from './effects/effects';
import { ContextualVariables } from './contextual-variables/contextual-variables';
import { TwoWayBinding } from './two-way-binding/two-way-binding';
import { TodoList } from './todo-list/todo-list';
import { DynamicStyling } from './dynamic-styling/dynamic-styling';

@Component({
  selector: 'app-root',
  imports: [Login, Signup,Profile,Counter,Events,InputvalueGetSet,FirstForm,IfElse,ElseIf, SwitchCase, ForLoop, Signals, ComputedSignals,Effects,ContextualVariables,TwoWayBinding,TodoList,DynamicStyling],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-app-angular');
  click_Function() {
    alert("Button Clicked - Going to Login Page");
  }
}
