import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';
import { DeliveryServiceService } from '../delivery-service.service';
import { OrderDto } from '../shared/models/orderDto.model';
import { ProductDto } from '../shared/models/productDto.model';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {
  productList:ProductDto[] = [];
  constructor(public router: Router, public service: DeliveryServiceService, private toastr: ToastrService, private authService:AuthService) { }
  
  orderForm = new FormGroup({
    id : new FormControl(""),
    quantity : new FormControl(""),
    comment : new FormControl(""),
    address: new FormControl("")
  });
  
  ngOnInit(): void {
    
    if(!(localStorage.getItem('currentOrder') == '' || localStorage.getItem('currentOrder') == null))
      this.router.navigateByUrl('currOrder');
   this.service.getProducts().subscribe(
      (data:ProductDto[])=>{
        this.productList = data;
      },
      error=>{
        this.toastr.error("Error getting product list.");
      }
    );
  }
  onSubmit(){
    let orderDto:OrderDto = new OrderDto();
    orderDto.comment = this.orderForm.controls['comment'].value;
    orderDto.address = this.orderForm.controls['address'].value;
    orderDto.products?.set(Number(this.orderForm.controls['id'].value), Number(this.orderForm.controls['quantity'].value));
    if(localStorage.getItem('token') != null)
    this.service.createOrder(orderDto, this.authService.decodeToken(localStorage.getItem('token')!).Id!).subscribe((data:any) => {
      localStorage.setItem("currentOrder", data.id)
      this.router.navigateByUrl('currOrder');
    }
    )

  }
}
