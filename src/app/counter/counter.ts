import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  count: number = 0;
  

  //M1: Methods to modify the count
  incrementCount() {
    this.count++;
  }
  decrementCount() {
    this.count--;
  }
  
  resetCount() {
    this.count = 0;
  }
  //M2: Method to modify counter;
  handleCounter(action: string) {
    switch (action) {
      case 'increment':
        this.count++;
        break;
      case 'decrement':
        if (this.count > 0){
          this.count--; 
        }
        else{
          alert("Count cannot be negative");
        }
        break;
      case 'reset':
        this.count = 0;
        break;
      default:
        break;
    }
  }

}
