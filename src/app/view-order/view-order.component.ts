import { Component, OnInit,  } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { interval } from 'rxjs';
import { DeliveryServiceService } from '../delivery-service.service';
import { OrderDto } from '../shared/models/orderDto.model';



@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.css']
})
export class ViewOrderComponent implements OnInit {
  item:OrderDto = new OrderDto;
  timeLeft: any;
  constructor(private toastr:ToastrService, private service:DeliveryServiceService, private router:Router) { }

  callDuration = "00:00";
  startTimer() {
    var minutes;
    var seconds;

    interval(1000).subscribe(x => {
        minutes = Math.floor(this.timeLeft / 60);
        seconds = Math.floor(this.timeLeft % 60);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        this.callDuration = minutes + ":" + seconds;

        --this.timeLeft;
        if (this.timeLeft < 0) {
          this.service.orderDelivered(Number(localStorage.getItem('currentOrder'))).subscribe()
          localStorage.setItem('currentOrder', '');
          this.router.navigateByUrl("/orders");
        }
    })
}

  ngOnInit(): void {
    if(localStorage.getItem('currentOrder') == '')
      this.router.navigateByUrl('orders');

    this.service.getOrder(Number(localStorage.getItem('currentOrder'))).subscribe(
      (data:OrderDto)=>{
        this.item = data;
        var date1 = new Date();
        var date2 = this.item.endTime?.toString();
        console.log(date2);
        this.timeLeft = Date.parse(date2!) - date1.getTime();
        this.timeLeft = this.timeLeft / 1000;  

        this.startTimer();
      }
    );
  }

}
