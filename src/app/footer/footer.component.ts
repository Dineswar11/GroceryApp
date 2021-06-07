import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { userClass } from '../Models/user.model';
import { NewslettersubscriptionService } from '../Services/newslettersubscription.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private newsletterSub:NewslettersubscriptionService,private toastr:ToastrService) { }

  users=new userClass('');

  ngOnInit(): void {
  }

  addNewLetterSubscription(){
    this.newsletterSub.addNewsLetterSubscription(this.users).subscribe(
      res=>{
        this.toastr.success('Subscribtion Added 🤩')
      },
      err=>{
        console.log('err in adding email subscription',err)
      }
    )
  }
}
