import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';
import { DeliveryServiceService } from '../delivery-service.service';
import { RegisterDto } from '../shared/models/registerDto.model';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  registrationForm = new FormGroup({
    Name: new FormControl('', Validators.required),
    Email: new FormControl('', Validators.email),
    FullName: new FormControl('', Validators.required),
    Address:new FormControl('', Validators.required)
  });

  regInit:RegisterDto = new RegisterDto;

  constructor(public router: Router, public service: DeliveryServiceService, private fb:FormBuilder, private toastr:ToastrService, private authService:AuthService) { }

  ngOnInit(): void {
    if(localStorage.getItem('token')==null)
      this.router.navigateByUrl('login');
    this.service.getUser(this.authService.decodeToken(localStorage.getItem('token')!).Id!).subscribe((data:RegisterDto) =>
      {
        this.regInit = data;
      }
    )
    console.log(this.regInit);
  }

  onSubmit(){
    let regModel = new RegisterDto();
    regModel.birthDate = this.regInit.birthDate;
    regModel.address = this.registrationForm.controls['Address'].value
    regModel.email = this.registrationForm.controls['Email'].value
    regModel.fullName = this.registrationForm.controls['FullName'].value
    regModel.name = this.registrationForm.controls['Name'].value
    regModel.password = "";
    regModel.repeatedPassword = "";
    regModel.userType = 0;
    regModel.id = this.regInit.id;
   
    this.service.modifyUser(regModel).subscribe(
      data=>{
        this.router.navigateByUrl("/login");
      }
    )
  }
}
