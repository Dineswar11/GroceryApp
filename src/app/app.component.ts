import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AddtocartService } from './Services/addtocart.service';
import { LoginsatusService } from './Services/loginsatus.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'GroceryApp';

  constructor(private CartDS:AddtocartService,public LoginDS:LoginsatusService,private Router:Router){}

  numberOfProductsAdded:number=0;

  username = localStorage.getItem("username")

  numberOfProducts(){
    this.numberOfProductsAdded = this.CartDS.getNumberofProductsInCart()
  }

  navigate(){
    this.Router.navigateByUrl('/userprofile/'+this.username)
  }
}
