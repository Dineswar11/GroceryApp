import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fruitsvegitablesArr } from 'src/app/Models/fruits-vegitables.model';

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css']
})
export class NewproductComponent implements OnInit {

  category:number;

  newSnacksProduct:any;

  newFruitsProduct:fruitsvegitablesArr;

  constructor(private router:Router) { }

  ngOnInit(): void {
    if(this.router.url==='/admin/fruits_vegetables_newproduct'){
      this.category = 1
    }
    else this.category = 2
    
    console.log(this.category)
  }

}
