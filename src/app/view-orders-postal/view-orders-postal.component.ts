import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';
import { DeliveryServiceService } from '../delivery-service.service';
import { OrderDto } from '../shared/models/orderDto.model';

@Component({
  selector: 'app-view-orders-postal',
  templateUrl: './view-orders-postal.component.html',
  styleUrls: ['./view-orders-postal.component.css']
})
export class ViewOrdersPostalComponent implements OnInit {
  orderList:OrderDto[] = [];

  constructor(private toastr:ToastrService, private service:DeliveryServiceService, private authService:AuthService) { }

  ngOnInit(): void {
    this.service.getOrdersPostal(this.authService.decodeToken(localStorage.getItem('token')!).Id!).subscribe(
      (data:OrderDto[])=>{
        this.orderList = data;
      },
      error=>{
        this.toastr.error("Error getting order list.");
      }
    );
  }
}
