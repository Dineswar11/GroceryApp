import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { opacity } from '../animation';
import { fruitsvegitablesArr } from '../Models/fruits-vegitables.model';
import { FruitsVegitablesService } from '../Services/fruits-vegitables.service';

@Component({
  selector: 'app-fruits-vegitables',
  templateUrl: './fruits-vegitables.component.html',
  styleUrls: ['./fruits-vegitables.component.css']
})
export class FruitsVegitablesComponent implements OnInit {

  showFilterByTitle:boolean=true
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

}
