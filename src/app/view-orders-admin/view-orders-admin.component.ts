import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DeliveryServiceService } from '../delivery-service.service';
import { OrderDto } from '../shared/models/orderDto.model';

@Component({
  selector: 'app-view-orders-admin',
  templateUrl: './view-orders-admin.component.html',
  styleUrls: ['./view-orders-admin.component.css']
})

export class ViewOrdersAdminComponent implements OnInit {

  orderList:OrderDto[] = [];
  status = Status;
  constructor(private toastr:ToastrService, private service:DeliveryServiceService) { }

  ngOnInit(): void {
    this.service.getOrdersAdmin().subscribe(
      (data:OrderDto[])=>{
        this.orderList = data;
      },
      error=>{
        this.toastr.error("Error getting order list.");
      }
    );
  }
}

export enum Status{
  Free,
  InProgress,
  Delivered
}
