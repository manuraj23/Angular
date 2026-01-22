import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-routing-header',
  imports: [RouterLink,RouterOutlet,RouterLinkActive],
  templateUrl: './routing-header.html',
  styleUrl: './routing-header.css',
})
export class RoutingHeader {

}
