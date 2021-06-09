import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  showDropdown:boolean=false;

  hideNavbar:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

}
