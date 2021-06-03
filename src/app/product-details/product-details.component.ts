import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FruitsVegitablesService } from '../Services/fruits-vegitables.service';
import { SnacksService } from '../Services/snacks.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productData:any;

  category:string;

  constructor(private ActivatedRoute: ActivatedRoute,private Router:Router, private SnacksDataService: SnacksService,
              private Fruits_Vegetables: FruitsVegitablesService) { }

  ngOnInit(): void {

    let id = this.ActivatedRoute.snapshot.params.id;
    if(this.Router.url === '/snacks/'+id){
      this.category = 'snacks'
      this.SnacksDataService.getSnacksDataWithId(id).subscribe(
        res => {
          this.productData=res;
        },
        err => {
          console.log('err in getting specific snacks data is', err)
        }
      )  
    }
    if(this.Router.url === '/fruits-vegitables/'+id){
      this.category = 'fruits'
      this.Fruits_Vegetables.getSpecificFruitsAndVegitablesData(id).subscribe(
        res=>{
          this.productData=res;
        },
        err=>{
          console.log('err in getting specific fruits and vegetables data is', err)
        }
      )
    }
    
  }

}
