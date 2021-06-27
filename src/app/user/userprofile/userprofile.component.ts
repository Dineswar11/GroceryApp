import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  constructor(private UserService:UserService,private sanitizer:DomSanitizer) { }

  UserDetails;

  file:File;

  fileSizegt1MB:boolean;

  url;

  showImage:boolean=false;

  ngOnInit(): void {
    let username = localStorage.getItem('username')
    this.UserService.getUserDetailsByName(username).subscribe(
      res=>{
        this.UserDetails = res['message']
      },
      err=>{
        console.log(err.message)
      }
    )
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

    formData.append('userDetails',JSON.stringify(this.UserDetails))

    console.log(formData.get('userDetails'))

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

}
