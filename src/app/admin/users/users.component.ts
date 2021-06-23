import { Component, OnInit } from '@angular/core';
import { NewslettersubscriptionService } from 'src/app/Services/newslettersubscription.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any[] = [];

  constructor(private UserDS: NewslettersubscriptionService) { }

  ngOnInit(): void {
    this.UserDS.getUserDetails().subscribe(
      res => {
        this.users = res['message'];
      },
      err => {
        console.log('err in getting user data is', err)
      }
    )
  }

}
