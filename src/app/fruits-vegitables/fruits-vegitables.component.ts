import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fruits-vegitables',
  templateUrl: './fruits-vegitables.component.html',
  styleUrls: ['./fruits-vegitables.component.css']
})
export class FruitsVegitablesComponent implements OnInit {

  showFilterByTitle:boolean=true

  constructor() { }

  ngOnInit(): void {
  }

}
