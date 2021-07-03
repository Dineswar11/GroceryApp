import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddtocartService } from './Services/addtocart.service';
import { LoginsatusService } from './Services/loginsatus.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'GroceryApp';

  constructor(private CartDS: AddtocartService, public LoginDS: LoginsatusService, private Router: Router) { }

  productsInCart = []

  numberOfProductsAdded: number = 0;

  username = localStorage.getItem("username")

  ngOnInit() {
    this.CartDS.updateObservable(0)
    if (localStorage.getItem("ItemsinCart")) {
      this.productsInCart = JSON.parse(localStorage.getItem("ItemsinCart"))
      this.CartDS.updateObservable(this.productsInCart)
    }
    else {
      localStorage.setItem('ItemsinCart', JSON.stringify(this.productsInCart))
      this.CartDS.updateObservable(this.productsInCart)
    }
    this.CartDS.dataObservable.subscribe(
      prodObj => {
        this.numberOfProductsAdded = prodObj.length
      }
    )
  }
}
