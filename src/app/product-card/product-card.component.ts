import { Component, OnInit } from '@angular/core';
import { opacity, popup } from '../animation';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
  animations:[opacity,popup]
})
export class ProductCardComponent implements OnInit {

  displayImage2:boolean=false;

  displayButton:boolean=false

  constructor() { }

  ngOnInit(): void {
  }

}
