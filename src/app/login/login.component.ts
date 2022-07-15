import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DeliveryServiceService } from '../delivery-service.service';
import { LoginDto } from '../shared/models/loginDto.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   loginForm = new FormGroup({
    email : new FormControl("", Validators.email),
    password : new FormControl("", [Validators.required, Validators.minLength(4)]),
  });
  constructor(private router: Router, private toastr: ToastrService, private service: DeliveryServiceService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    let loginDto:LoginDto = new LoginDto();
    loginDto.Email = this.loginForm.controls['email'].value
    loginDto.Password = this.loginForm.controls['password'].value
    this.service.loginUser(loginDto).subscribe((data) => {
      localStorage.setItem('id',data )
    },
    error => {
      this.toastr.error('Invalid login data');
    }
    )
    
  }

}
