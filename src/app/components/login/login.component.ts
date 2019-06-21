import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User;

  constructor(
    private router:Router
  ) { 
this.user={
  email:'',
  password:'',
  remember:false
}
  }

  authUser(user){
    console.log(user);
    this.router.navigate(['/dashboard']);

  }
  ngOnInit() {
  }

}
