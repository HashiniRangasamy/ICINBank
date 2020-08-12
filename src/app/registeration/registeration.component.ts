import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {

  firstName:string;
  lastName:string;
  mailId:string;
  dob:Date;
  password:string;
  confirmPassword:string;
  phone:number;
  userName:string;
  address:string;
  ngOnInit(): void {
  }
  constructor(private router: Router){
  }
  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }
  }
