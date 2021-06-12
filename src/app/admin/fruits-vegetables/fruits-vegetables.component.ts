import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { fruitsvegitablesArr } from 'src/app/Models/fruits-vegitables.model';
import { FruitsVegitablesService } from 'src/app/Services/fruits-vegitables.service';

@Component({
  selector: 'app-fruits-vegetables',
  templateUrl: './fruits-vegetables.component.html',
  styleUrls: ['./fruits-vegetables.component.css']
})
export class FruitsVegetablesComponent implements OnInit {

  showFilterByTitle: boolean = true

  fruitsVegetablesData: fruitsvegitablesArr[] = [];

  subscription: Subscription;

  seachTerm: string;

  minPrice: number;

  maxPrice: number;

  p:number=1;

  constructor(private frObj: FruitsVegitablesService, private router: Router) { }

  ngOnInit(): void {
    this.subscription = this.frObj.getFruitsAndVegitables().subscribe(
      products => {
        this.fruitsVegetablesData = products;
      },
      err => {
        console.log("error is", err)
      }
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  navigateToNewProduct(){
    console.log(this.router.url)
    this.router.navigateByUrl('/admin/fruits_vegetables_newproduct')
  }


}
