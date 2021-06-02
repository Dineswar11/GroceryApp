import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { opacity } from '../animation';
import { fruitsvegitablesArr } from '../Models/fruits-vegitables.model';
import { FruitsVegitablesService } from '../Services/fruits-vegitables.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  animations:[opacity]
})
export class CartComponent implements OnInit {

  myProducts:fruitsvegitablesArr[]=[];

  constructor(private frObj:FruitsVegitablesService,private router:Router) { }
  ngOnInit(): void {
    this.frObj.getFruitsAndVegitables().subscribe(
      products=>{
        this.myProducts=products;
        console.log(this.myProducts);
      },
      err=>{
        console.log("error is",err)
      }
      )
  }

  quantity:number = 1;
  saleprice:number= 50;
  
}


