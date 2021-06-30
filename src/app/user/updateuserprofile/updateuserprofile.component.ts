import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { contactDetails, generalDetails, shippingDetails } from 'src/app/Models/userDetails.model';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-updateuserprofile',
  templateUrl: './updateuserprofile.component.html',
  styleUrls: ['./updateuserprofile.component.css']
})
export class UpdateuserprofileComponent implements OnInit {

  userDetails;

  file:File;

  fileSizegt1MB:boolean;

  url;

  showImage:boolean=false;

  generalDetails = new generalDetails('','','','','');

  contactDetails = new contactDetails('','','','');

  shippingDetails = new shippingDetails('',null,'','','','','');

  constructor(private UserService:UserService,private sanitizer:DomSanitizer) { }

  ngOnInit(): void {
    this.userDetails = JSON.parse(localStorage.getItem("userObj"));
    this.generalDetails.email = this.userDetails.email
    this.UserService.getUserDetailsByName(this.userDetails.username).subscribe(
      res=>{
        this.userDetails = res['message']
        localStorage.setItem("userObj",JSON.stringify(res['message']))
      },
      err=>{

      }
    )
    if(this.userDetails.generalDetails){
      this.generalDetails = this.userDetails.generalDetails
    }
    if(this.userDetails.contactDetails){
      this.contactDetails = this.userDetails.contactDetails
    }
    if(this.userDetails.shippingDetails){
      this.shippingDetails = this.userDetails.shippingDetails
    }
  }

  navigate(id){
    document.getElementById(id).scrollIntoView()
  }

  selectFile(event){
    this.file = event.target.files[0]
    if(event.target.files[0].size < 1000000){
      this.url = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(event.target.files[0]))
      this.fileSizegt1MB = false
      this.showImage = true
    }
    else this.fileSizegt1MB = true
  }

  updateProfilePic(ref){
    let formData = new FormData();
    
    formData.append('profilePic',this.file,this.file.name)

    formData.append('userDetails',JSON.stringify(this.userDetails))

    this.UserService.updateProfilePic(formData).subscribe(
      res=>{
        alert(res['message'])
        this.ngOnInit()
      },
      err=>{
        console.log(err)
      }
    )
  }

  addGeneralDetails(){
    let updatedUserDetails = {
      username:this.userDetails.username,
      _id:this.userDetails._id,
      generalDetails:this.generalDetails
    }
    this.UserService.updateUserDetails(updatedUserDetails).subscribe(
      res=>{
        alert(res['message'])
        this.ngOnInit()
      },
      err=>{

      }
    )
  }

  addContactDetails(){
    let updatedUserDetails = {
      username:this.userDetails.username,
      _id:this.userDetails._id,
      contactDetails:this.contactDetails
    }
    this.UserService.updateUserDetails(updatedUserDetails).subscribe(
      res=>{
        alert(res['message'])
        this.ngOnInit()
      },
      err=>{

      }
    )
  }

  addShippingDetails(){
    let updatedUserDetails = {
      username:this.userDetails.username,
      _id:this.userDetails._id,
      shippingDetails:this.shippingDetails
    }
    this.UserService.updateUserDetails(updatedUserDetails).subscribe(
      res=>{
        alert(res['message'])
        this.ngOnInit()
      },
      err=>{

      }
    )
  }

}