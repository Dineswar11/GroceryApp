import { Component, OnInit } from '@angular/core';
import { slideleft, slideright } from '../animation';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  animations:[slideright,slideleft]
})
export class AdminComponent implements OnInit {

  showDropdown:boolean=false;

  hideNavbar:boolean=false;

  windowMedia : any = window.matchMedia("(max-width:700px)")

  constructor() {
    if(this.windowMedia.matches){
      this.hideNavbar = true
    }
   }

  ngOnInit(): void {
  }

}
