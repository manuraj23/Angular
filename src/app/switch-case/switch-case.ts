import { Component } from '@angular/core';

@Component({
  selector: 'app-switch-case',
  imports: [],
  templateUrl: './switch-case.html',
  styleUrl: './switch-case.css',
})
export class SwitchCase {
  color: string = 'red';
  handleColor(val: string) {
    this.color = val;
  }

  changeColor(event: Event) {
    this.color = (event.target as HTMLInputElement).value;
  }
}
