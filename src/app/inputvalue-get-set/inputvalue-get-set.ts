import { Component } from '@angular/core';

@Component({
  selector: 'app-inputvalue-get-set',
  imports: [],
  templateUrl: './inputvalue-get-set.html',
  styleUrl: './inputvalue-get-set.css',
})
export class InputvalueGetSet {
  name="";
  showName="";
  getName(event:Event){
    
    const val=(event.target as HTMLInputElement).value;
    console.log(val);
    this.name=val;
  }
  displayName(){
    this.showName=this.name;
  }
}
