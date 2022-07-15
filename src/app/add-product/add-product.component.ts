import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DeliveryServiceService } from '../delivery-service.service';
import { ProductDto } from '../shared/models/productDto.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  addProductForm = new FormGroup({
    Name: new FormControl('', Validators.required),
    UnitPrice: new FormControl('', Validators.required),
    Ingredients: new FormControl('', Validators.required),
  })

  constructor(public router: Router, public service: DeliveryServiceService, private fb:FormBuilder, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    let product = new ProductDto();
    product.ingredients = this.addProductForm.controls['Ingredients'].value;
    product.name = this.addProductForm.controls['Name'].value;
    product.unitPrice = Number(this.addProductForm.controls['UnitPrice'].value);
  
    this.service.addProduct(product).subscribe(() =>{})
  }
}
