import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { snacksArr } from 'src/app/Models/snacks.model';
import { SnacksService } from 'src/app/Services/snacks.service';

@Component({
  selector: 'app-snacks',
  templateUrl: './snacks.component.html',
  styleUrls: ['./snacks.component.css']
})
export class SnacksComponent implements OnInit {

  showFilterByTitle:boolean=true;

  snacksData:snacksArr[]=[];

  subscription:Subscription;

  seachTerm:string;

  minPrice:number;

  maxPrice:number;

  constructor(private snacksService:SnacksService, private router: Router) { }

  ngOnInit(): void {
    this.subscription = this.snacksService.getSnackData().subscribe(
      res=>{
        this.snacksData=res;
      },
      err=>{
        console.log('err in getting snacks data is',err)
      }
    )
  };

  ngOnDestroy():void{
    this.subscription.unsubscribe();
  }

  navigateToNewProduct(){
    console.log(this.router.url)
    this.router.navigateByUrl('/admin/snacks_newproduct')
  }

}
