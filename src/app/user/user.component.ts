import { Component, OnInit } from '@angular/core';
import { LoginsatusService } from '../Services/loginsatus.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(public LoginDS:LoginsatusService) { }

  ngOnInit(): void {
  }

}
