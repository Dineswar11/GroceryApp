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

  constructor() { }

  ngOnInit(): void {
  }

}
