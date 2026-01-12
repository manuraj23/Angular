import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  imports: [],
  templateUrl: './events.html',
  styleUrl: './events.css',
})
export class Events {
  handleEvent(event:MouseEvent) {
    alert("Function Called from Events Component" );
    console.log(event);
  }
}
