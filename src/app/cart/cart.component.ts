import { Component, OnInit } from '@angular/core';
import { opacity } from '../animation';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  animations:[opacity]
})
export class CartComponent implements OnInit {

  constructor() { 
    
  }


  ngOnInit(): void {
  }

  quantity:number = 1;
  saleprice:number= 50;
  
}


