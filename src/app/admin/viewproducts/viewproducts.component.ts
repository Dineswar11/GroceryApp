import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewproducts',
  templateUrl: './viewproducts.component.html',
  styleUrls: ['./viewproducts.component.css']
})
export class ViewproductsComponent implements OnInit {

  @Input() productData:any;

  constructor(private Router:Router) { }

  ngOnInit(): void {
  }

  onSelectProduct(id){
    console.log(this.Router.url)
    if(this.Router.url === '/admin/snacks'){
      this.Router.navigateByUrl('/admin/snacks/'+id)
    }
    if(this.Router.url === '/admin/fruits_vegetables'){
     this.Router.navigateByUrl('/admin/fruits_vegetables/'+id)
    }
  }

}
