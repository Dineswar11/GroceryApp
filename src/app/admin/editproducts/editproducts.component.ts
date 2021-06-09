import { Component, OnInit } from '@angular/core';
import { FruitsVegitablesService } from 'src/app/Services/fruits-vegitables.service';
import { SnacksService } from 'src/app/Services/snacks.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-editproducts',
  templateUrl: './editproducts.component.html',
  styleUrls: ['./editproducts.component.css']
})
export class EditproductsComponent implements OnInit {

  productData: any;

  category: string;

  productAddedToCart: boolean;

  constructor(private ActivatedRoute: ActivatedRoute, private Router: Router, private SnacksDataService: SnacksService,
    private Fruits_Vegetables: FruitsVegitablesService) { }

  ngOnInit(): void {

    console.log(this.Router.url)
    let id = this.ActivatedRoute.snapshot.params.id;
    if (this.Router.url === '/admin/snacks/' + id) {
      this.category = 'snacks'
      this.SnacksDataService.getSnacksDataWithId(id).subscribe(
        res => {
          this.productData = res;
          console.log(this.productData)
        },
        err => {
          console.log('err in getting specific snacks data is', err)
        }
      )
    }
    if (this.Router.url === '/admin/fruits_vegetables/' + id) {
      this.category = 'fruits'
      this.Fruits_Vegetables.getSpecificFruitsAndVegitablesData(id).subscribe(
        res => {
          this.productData = res;
          console.log(this.productData)
        },
        err => {
          console.log('err in getting specific fruits and vegetables data is', err)
        }
      )
    }


  }

}