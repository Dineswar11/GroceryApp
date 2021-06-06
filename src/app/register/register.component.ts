import { Component, OnInit } from '@angular/core';
import { registerclass } from '../Models/register.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerDetails=new registerclass('','','','')

  constructor() { }

  ngOnInit(): void {
  }

  addRegisterDetails(){
    
  }

}
