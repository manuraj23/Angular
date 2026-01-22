import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-effects',
  imports: [],
  templateUrl: './effects.html',
  styleUrl: './effects.css',
})
export class Effects {
  username=signal("Manu");
  count=signal(0);
  displayHeading=false;
  constructor(){
    effect(()=>{
      if(this.count()%2==0){
        this.displayHeading=true;
        setTimeout(()=>{
          this.displayHeading=false;
        },1000);
      }else{
        this.displayHeading=false;
      }
    });
  }
  toggleValue(){
    this.count.set(this.count()+1);
  }
}
