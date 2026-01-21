import { Component, computed, effect, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.html',
  styleUrl: './signals.css',
})
export class Signals {
   
  //data type with signals:
  countSignal = signal<number | string | boolean >(0);
  // or
  countSignal2 : WritableSignal<number | string | boolean> = signal(0);
  //or
  // countSignal3:Signal<number>= computed(()=>200)


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
