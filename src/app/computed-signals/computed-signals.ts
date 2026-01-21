import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-computed-signals',
  imports: [],
  templateUrl: './computed-signals.html',
  styleUrl: './computed-signals.css',
})
export class ComputedSignals {
  x=signal(10);
  y=signal(20);
  z= computed(() => this.x() + this.y());
  showValue() {
    console.log(this.z());
    this.x.set(100);
    console.log(this.z());
  }
}
