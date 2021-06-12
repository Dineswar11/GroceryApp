import { Component } from '@angular/core';
import { AddtocartService } from './Services/addtocart.service';
import { LoginsatusService } from './Services/loginsatus.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'GroceryApp';

  constructor(private CartDS:AddtocartService,public LoginDS:LoginsatusService){}

  numberOfProductsAdded:number=0;

  numberOfProducts(){
    this.numberOfProductsAdded = this.CartDS.getNumberofProductsInCart()
  }
}
