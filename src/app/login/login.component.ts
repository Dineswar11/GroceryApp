import { Component, OnInit } from '@angular/core';
import { userDetails } from '../Models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  showPassword:boolean=true;

  userDetails= new userDetails('','');

  constructor() { }

  ngOnInit(): void {
  }

}
