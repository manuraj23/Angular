import { Component } from '@angular/core';
import { email } from '@angular/forms/signals';

@Component({
  selector: 'app-for-loop',
  imports: [],
  templateUrl: './for-loop.html',
  styleUrl: './for-loop.css',
})
export class ForLoop {
  users = ['Tony', 'Steve', 'Bruce', 'Natasha', 'Clint', 'Wanda'];
  students = [
    { name: "Tony", age: 45, email: "tony@gmail.com" },
    { name: "Steve", age: 100, email: "steve@gmail.com" },
    { name: "Bruce", age: 50, email: "bruce@gmail.com" },
    { name: "Natasha", age: 35, email: "natasha@gmail.com" },
    { name: "Clint", age: 40, email: "clint@gmail.com" },
    { name: "Wanda", age: 30, email: "wanda@gmail.com" }
  ]
}
