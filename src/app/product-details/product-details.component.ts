import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Routes } from '@angular/router';
import{opacity} from '../animation';
import { fruitsvegitablesArr } from '../Models/fruits-vegitables.model';
import { snacksArr } from '../Models/snacks.model';
import { SnacksService } from '../Services/snacks.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  animations:[opacity]
})
export class ProductDetailsComponent implements OnInit {
  

  snacksData:snacksArr;

  constructor(private snacksService:SnacksService ,private ar:ActivatedRoute) { }

  ngOnInit(): void {

    let id=this.ar.snapshot.params.id;
       
    this.snacksService.getSnacksById(id).subscribe(
      obj=>{
        console.log("obj is ",obj)
        this.snacksData=obj;
        console.log(this.snacksData)
        
      
      },
      err=>{
        console.log("err in reading post",err)
      }
    )
  }
}



