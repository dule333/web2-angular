import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DeliveryServiceService } from '../delivery-service.service';
import { OrderDto } from '../shared/models/orderDto.model';


@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css']
})
export class ViewOrdersComponent implements OnInit {

  orderList:OrderDto[] = [];

  constructor(private toastr:ToastrService, private service:DeliveryServiceService) { }

  ngOnInit(): void {
    this.service.getOrders(Number(localStorage.getItem('id'))).subscribe(
      (data:OrderDto[])=>{
        this.orderList = data;
      },
      error=>{
        this.toastr.error("Error getting order list.");
      }
    );
  }
}
