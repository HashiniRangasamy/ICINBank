import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  pass:string;
  constructor() { }

  ngOnInit(): void {
  }
  LoginUser(){
    if(this.username=="admin" && this.pass=="admin")
    {
      console.log("welcome");
    }
  }
}
