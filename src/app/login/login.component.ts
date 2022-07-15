import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';
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
    password : new FormControl("", [Validators.required, Validators.minLength(3)]),
  });
  constructor(private router: Router, private toastr: ToastrService, private service: DeliveryServiceService, private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    let loginDto:LoginDto = new LoginDto();
    loginDto.Email = this.loginForm.controls['email'].value
    loginDto.Password = this.loginForm.controls['password'].value
    this.service.loginUser(loginDto).subscribe((data:string) => {
      localStorage.setItem('token', data)
      var token = this.authService.decodeToken(data)
      if(token.Role == 0){
        this.router.navigateByUrl("order");
      }
      if(token.Role == 1){
        this.router.navigateByUrl("adminOrders");
      }
      if(token.Role == 2){
        this.router.navigateByUrl("freeOrders");
      }
    }
    )
    
  }

}
