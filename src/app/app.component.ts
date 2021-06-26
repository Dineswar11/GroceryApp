import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddtocartService } from './Services/addtocart.service';
import { LoginsatusService } from './Services/loginsatus.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'GroceryApp';

  constructor(private CartDS:AddtocartService,public LoginDS:LoginsatusService,private Router:Router){}

  numberOfProductsAdded:number=0;

  username = localStorage.getItem("username")

  ngOnInit(){
    
  }

  numberOfProducts(){
    this.numberOfProductsAdded = this.CartDS.getNumberofProductsInCart()
  }

  navigate(){
    // this.Router.navigateByUrl('/userprofile/'+this.username)
    this.Router.navigateByUrl('/user')
  }
}
