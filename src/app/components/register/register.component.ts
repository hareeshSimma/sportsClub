import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
user:User;
  constructor(
    private router:Router
  ) { 
this.user={
  email:'',
  password:'',
  confirmpass:'',
  cricket:false,
  foodball:false,
  badminton:false
}
  }

  register(user){
    console.log(user);
    this.router.navigate(['']);

  }
  ngOnInit() {
  }

}
