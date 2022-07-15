import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs';
import { AuthService } from '../auth.service';
import { Token } from '../shared/models/token.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router, private authService:AuthService) { }
  role:number = -1;
  ngOnInit(): void {
    this.role = this.authService.decodeToken(localStorage.getItem('token')!).Role!
    this.startTimer()
  }
  startTimer() {
    interval(1000).subscribe(x => {
    this.role = this.authService.decodeToken(localStorage.getItem('token')!).Role!
    })
  }
  Login(){
    this.router.navigateByUrl('login');
    this.role = this.authService.decodeToken(localStorage.getItem('token')!).Role!
  }

Register(){
  this.router.navigateByUrl('register');
  this.role = this.authService.decodeToken(localStorage.getItem('token')!).Role!
}
Logout(){
  localStorage.removeItem('token');
  localStorage.removeItem('currOrder');
  this.router.navigateByUrl('login');
  this.role = -1
}
Product(){
  this.router.navigateByUrl('product');
  this.role = this.authService.decodeToken(localStorage.getItem('token')!).Role!
}
CreateOrder(){
  this.router.navigateByUrl('order');
  this.role = this.authService.decodeToken(localStorage.getItem('token')!).Role!
}
Order(){
  this.router.navigateByUrl('currOrder');
  this.role = this.authService.decodeToken(localStorage.getItem('token')!).Role!
}
OrdersC(){
  this.router.navigateByUrl('orders');
  this.role = this.authService.decodeToken(localStorage.getItem('token')!).Role!
}
OrdersP(){
  this.router.navigateByUrl('freeOrders');
  this.role = this.authService.decodeToken(localStorage.getItem('token')!).Role!
}
OrdersPH(){
  this.router.navigateByUrl('postalOrders');
  this.role = this.authService.decodeToken(localStorage.getItem('token')!).Role!
}
OrdersA(){
  this.router.navigateByUrl('adminOrders');
  this.role = this.authService.decodeToken(localStorage.getItem('token')!).Role!
}
Profile(){
  this.router.navigateByUrl('profile');
  this.role = this.authService.decodeToken(localStorage.getItem('token')!).Role!
}
Verification(){
  this.router.navigateByUrl('postals');
  this.role = this.authService.decodeToken(localStorage.getItem('token')!).Role!
}

}
