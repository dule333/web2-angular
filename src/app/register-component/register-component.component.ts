import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DeliveryServiceService } from '../delivery-service.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { RegisterDto } from '../shared/models/registerDto.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent implements OnInit {

  registrationForm = new FormGroup({
    Name: new FormControl('', Validators.required),
    Email: new FormControl('', Validators.email),
    FullName: new FormControl('', Validators.required),
    Password: new FormControl('', [Validators.required, Validators.minLength(4)]),
    RepeatedPassword: new FormControl('', [Validators.required, Validators.minLength(4)]),
    BirthDate:new FormControl('', Validators.required),
    Address:new FormControl('', Validators.required),
    UserType:new FormControl('',Validators.required),
  });

  constructor(public router: Router, public service: DeliveryServiceService, private fb:FormBuilder, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    let regModel = new RegisterDto();
    regModel.birthDate = (this.registrationForm.controls['BirthDate'].value)
    regModel.address = this.registrationForm.controls['Address'].value
    regModel.email = this.registrationForm.controls['Email'].value
    regModel.fullName = this.registrationForm.controls['FullName'].value
    regModel.password = this.registrationForm.controls['Password'].value
    regModel.repeatedPassword = this.registrationForm.controls['RepeatedPassword'].value
    regModel.name = this.registrationForm.controls['Name'].value
    regModel.userType = Number(this.registrationForm.controls['UserType'].value)
   
    if(regModel.password != regModel.repeatedPassword)
    {
      this.toastr.error("Passwords aren't matching!");
      return;
    }
    this.service.registerUser(regModel).subscribe(
      data=>{
        this.router.navigateByUrl("/login");
      }
    )
  }

}
