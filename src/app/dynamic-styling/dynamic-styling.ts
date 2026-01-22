import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-styling',
  imports: [],
  templateUrl: './dynamic-styling.html',
  styleUrl: './dynamic-styling.css',
})
export class DynamicStyling {
  color: string = 'blue';
  // fontSize: string = '60px';
  fontSize: string = '80';
  headingSizeBig: string = '80';
  headingSizeSmall: string = '40';
  zoom=false;

  buttonZoom(){
    this.zoom=!this.zoom;
  }
}
