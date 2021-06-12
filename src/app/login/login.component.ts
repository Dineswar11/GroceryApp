import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { slideleft, slideright } from '../animation';
import { userDetails } from '../Models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations:[slideleft,slideright]
})
export class LoginComponent implements OnInit {

  showPassword:boolean=true;

  userDetails= new userDetails('','');

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  validateDetails(){
    if(this.userDetails.username!='admin'){
      alert('invalid username')
    }
    else{
      if(this.userDetails.password!='admin'){
        alert('invalid password')
      }
      else{
        localStorage.setItem("username","admin")
        this.router.navigate(["/admin"]);
      }
    }
  }

}
