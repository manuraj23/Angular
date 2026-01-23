import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-routing-user',
  imports: [],
  templateUrl: './routing-user.html',
  styleUrl: './routing-user.css',
})
export class RoutingUser {
  constructor(private Route:ActivatedRoute){

  }
  ngOnInit(){
    this.Route.params.subscribe(params=>{
      console.log(params['name']);
    });
  }
}
