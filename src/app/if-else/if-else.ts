import { Component } from '@angular/core';

@Component({
  selector: 'app-if-else',
  imports: [],
  templateUrl: './if-else.html',
  styleUrl: './if-else.css',
})
export class IfElse {
  display: boolean = false;
  toggleDiv:boolean = false;
  clickMe(){
    this.display = !this.display;
  }

  toggleDivButton(){
    this.toggleDiv = !this.toggleDiv; 
  }
}
