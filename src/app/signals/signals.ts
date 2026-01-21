import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.html',
  styleUrl: './signals.css',
})
export class Signals {
  count = signal(10);
  x = 20;

  constructor() {
    effect(() => {
      console.log("Count value is: ", this.count());
    });
  }
  updateCount(val: string) {
    if (val === 'dec') {
      this.count.set(this.count() - 1);
    }
    else if (val === 'inc') {
      this.count.set(this.count() + 1);
    }
  };
}
