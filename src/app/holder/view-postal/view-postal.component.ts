import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DeliveryServiceService } from '../../delivery-service.service';
import { PostalDto } from 'src/app/shared/models/postalDto.model';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-postal',
  templateUrl: './view-postal.component.html',
  styleUrls: ['./view-postal.component.css']
})
export class ViewPostalComponent implements OnInit {
  postalList:PostalDto[] = [];

  constructor(private toastr:ToastrService, private service:DeliveryServiceService) { }
  status = VerificationProgress;
  ngOnInit(): void {
    this.service.getPostals().subscribe(
      (data:PostalDto[])=>{
        this.postalList = data;
      },
      error=>{
        this.toastr.error("Error getting user list.");
      }
    );
  }

  Verify(postalId:number): void {
    this.service.verify(postalId, true).subscribe();
  }
  Decline(postalId:number): void {
    this.service.verify(postalId, false).subscribe();
  }
}

export enum VerificationProgress{
        Processing,
        Accepted,
        Declined
}