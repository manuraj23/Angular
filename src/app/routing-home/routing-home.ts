import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-routing-home',
  imports: [RouterLink],
  templateUrl: './routing-home.html',
  styleUrl: './routing-home.css',
})
export class RoutingHome {
  constructor(private router: Router) {}
  goToProfile() {
    this.router.navigate(['/profile', { name: 'Manu' }]);
  } 
  users=[
    {name:'Tony', age:45, email:'tony@example.com'},
    {name:'Steve', age:38, email:'steve@example.com'},
    {name:'Natasha', age:35, email:'natasha@example.com'},
    {name:'Bruce', age:50, email:'bruce@example.com'},
    {name:'Clint', age:42, email:'clint@example.com'}
  ]
} 
