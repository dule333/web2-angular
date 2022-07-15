import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  }

  Login(){
    this.router.navigateByUrl('login');
  }

Register(){
  this.router.navigateByUrl('register');
}
Logout(){
  localStorage.removeItem('token');
  localStorage.removeItem('currOrder');
  this.router.navigateByUrl('login');
}
Product(){
  this.router.navigateByUrl('product');
}
CreateOrder(){
  this.router.navigateByUrl('order');
}
Order(){
  this.router.navigateByUrl('currOrder');
}
OrdersC(){
  this.router.navigateByUrl('orders');
}
OrdersP(){
  this.router.navigateByUrl('freeOrders');
}
OrdersPH(){
  this.router.navigateByUrl('postalOrders');
}
OrdersA(){
  this.router.navigateByUrl('adminOrders');
}
Profile(){
  this.router.navigateByUrl('profile');
}
Verification(){
  this.router.navigateByUrl('postals');
}

}
