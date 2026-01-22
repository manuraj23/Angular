import { CommonModule, NgFor, NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  imports: [CommonModule, NgIf, NgFor,NgSwitch,NgSwitchCase],
  templateUrl: './directive.html',
  styleUrl: './directive.css',
})
export class Directive {

  show = false;
  login=true;
  block=0;

  handleClickSwitch() { 
    this.block = (this.block + 1);
  }

  students = ['tony', 'steve', 'bruce', 'clark', 'diana', 'Thor', 'Natasha']; //--Array

  studentData = [{ name: 'Peter Parker', alias: 'Spiderman', age: 21, city: 'New York' },
  { name: 'Bruce Wayne', alias: 'Batman', age: 35, city: 'Gotham' },
  { name: 'Clark Kent', alias: 'Superman', age: 30, city: 'Metropolis' },
  { name: 'Diana Prince', alias: 'Wonder Woman', age: 28, city: 'Themyscira' },
  { name: 'Tony Stark', alias: 'Iron Man', age: 45, city: 'Malibu' },
  { name: 'Steve Rogers', alias: 'Captain America', age: 100, city: 'Brooklyn' },
  { name: 'Natasha Romanoff', alias: 'Black Widow', age: 32, city: 'Stalingrad' }
  ];  //--Array of Objects

}
