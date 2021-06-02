import { Component, Input, OnInit } from '@angular/core';
import { opacity, popup } from '../animation';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
  animations:[opacity,popup]
})
export class ProductCardComponent implements OnInit {

  displayImage2:boolean=false;

  displayButton:boolean=false;

  discount:number;

  constructor() { }

  ngOnInit(): void {
  
    this.discount=((this.productData.price-this.productData.sale_price)*100)/this.productData.price;
  
  }

  //recieving data from parent
  @Input() productData:any;

}
