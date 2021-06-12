import { Component, OnInit } from '@angular/core';
import { FruitsVegitablesService } from 'src/app/Services/fruits-vegitables.service';
import { SnacksService } from 'src/app/Services/snacks.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editproducts',
  templateUrl: './editproducts.component.html',
  styleUrls: ['./editproducts.component.css']
})
export class EditproductsComponent implements OnInit {

  productData: any;

  category: number;

  constructor(private ActivatedRoute: ActivatedRoute, private Router: Router, private SnacksDataService: SnacksService,
    private Fruits_Vegetables: FruitsVegitablesService,private toastr:ToastrService) { }

  ngOnInit(): void {

    console.log(this.Router.url)
    let id = this.ActivatedRoute.snapshot.params.id;
    if (this.Router.url === '/admin/snacks/' + id) {
      this.category = 2
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
      this.category = 1
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

  updateSnacksData() {
    this.SnacksDataService.updateSnacksdetails(this.productData).subscribe(
      res => {
        this.Router.navigateByUrl('/admin/snacks')
        this.toastr.success(this.productData.name+' Updated');
      },
      err => {
        console.log('err in updating snacks data', err);
      }
    )
  }

  updateFruitsProduct() {
    this.Fruits_Vegetables.updateFruitsdetails(this.productData).subscribe(
      res => {
        this.Router.navigateByUrl('/admin/fruits_vegetables')
        this.toastr.success(this.productData.name+' Updated');
      },
      err => {
        console.log('err in updating fruits & vegetables data', err);
      }
    )
  }

  deleteSnacksProduct() {
    this.SnacksDataService.delete(this.productData.id).subscribe(
      res => {
        this.Router.navigateByUrl('/admin/snacks')
        this.toastr.warning(this.productData.name+' Deleted');
      },
      err => {
        console.log('err in deleting snacks data is', err)
      }
    )
  }

  deleteFruitsProduct() {
    this.Fruits_Vegetables.delete(this.productData.id).subscribe(
      res => {
        this.Router.navigateByUrl('/admin/fruits_vegetables')
        this.toastr.warning(this.productData.name+' Deleted');
      },
      err => {
        console.log('err in deleting fruits data is', err)
      }
    )
  }

}