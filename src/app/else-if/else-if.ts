import { Component } from '@angular/core';

@Component({
  selector: 'app-else-if',
  imports: [],
  templateUrl: './else-if.html',
  styleUrl: './else-if.css',
})
export class ElseIf {
  color: number = 1;

  handleColor(val: number) {
    this.color=val;
  }

  handleInput(event: Event) {
    this.color=parseInt((event.target as HTMLInputElement).value);
  }

}
