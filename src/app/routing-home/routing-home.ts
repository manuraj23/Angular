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
} 
