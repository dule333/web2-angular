import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';
import { DeliveryServiceService } from '../delivery-service.service';
import { OrderDto } from '../shared/models/orderDto.model';

@Component({
  selector: 'app-reserve-order',
  templateUrl: './reserve-order.component.html',
  styleUrls: ['./reserve-order.component.css']
})
export class ReserveOrderComponent implements OnInit {
  orderList:OrderDto[] = [];

  constructor(private toastr:ToastrService, private service:DeliveryServiceService, private router:Router, private authService:AuthService) { }

  ngOnInit(): void {
    this.service.getFreeOrdersPostal().subscribe(
      (data:OrderDto[])=>{
        this.orderList = data;
      },
      error=>{
        this.toastr.error("Error getting order list.");
      }
    );
  }
  Reserve(id:number): void {
    this.service.reserveOrder(id, this.authService.decodeToken(localStorage.getItem('token')!).Id!).subscribe(() =>
      {
        localStorage.setItem('currentOrder', id.toString());
        this.router.navigateByUrl('/currOrder');
      }
    );
  }
}
