import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FruitsClass } from 'src/app/Models/fruits-vegitables.model';
import { snacksClass } from 'src/app/Models/snacks.model';
import { FruitsVegitablesService } from 'src/app/Services/fruits-vegitables.service';
import { SnacksService } from 'src/app/Services/snacks.service';

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css']
})
export class NewproductComponent implements OnInit {

  category: number;

  newSnacksData = new snacksClass('',0,true,1,'','',false,true,0,0,true,'',12344,1,'','','',true,'','','','',0,'','');

  newFruitsData = new FruitsClass('',0,true,1,'','',false,true,0,0,true,'',12344,1,'','','','',true,'','','','',0,'','');

  constructor(private router: Router, private SnacksDS: SnacksService,private FruitsDS:FruitsVegitablesService) { }

  ngOnInit(): void {
    if (this.router.url === '/admin/fruits_vegetables_newproduct') {
      this.category = 1
    }
    else this.category = 2

    console.log(this.category)
  }

  addnewSnacksData() {
    this.SnacksDS.createNewSnacksProduct(this.newSnacksData).subscribe(
    res => {
      alert('new created')
    },
    err => {
      console.log('err in creating new product is', err)
    }
  )
  }

  addNewFruitsProduct(){
    this.FruitsDS.createNewFruitsProduct(this.newFruitsData).subscribe(
      res => {
        alert('new created')
      },
      err => {
        console.log('err in creating new product is', err)
      }
    )
  }

}
