import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { OrderDto } from './shared/models/orderDto.model';
import { PostalDto } from './shared/models/postalDto.model';
import { ProductDto } from './shared/models/productDto.model';
import { RegisterDto } from './shared/models/registerDto.model';

@Injectable({
  providedIn: 'root'
})
export class DeliveryServiceService {

  constructor(private http:HttpClient) { }

  getInspectionList(id:any):Observable<any[]> {
    return this.http.get<any>(environment.serverURL + 'Users/' + id);
  }

getUser(id:number):any{
  return this.http.get<RegisterDto>(environment.serverURL + 'Users/' + id);
}

modifyUser(data:RegisterDto){
  return this.http.put(environment.serverURL + 'Users', data);
}

  registerUser(data:any) {
    return this.http.post(environment.serverURL + 'Users', data);
  }

  loginUser(data:any):Observable<string> {
    return this.http.post(environment.serverURL + "Users/login", data, {responseType: 'text'});
  }
  getPostals():Observable<PostalDto[]> {
    return this.http.get<PostalDto[]>(environment.serverURL + 'Users')
  }

  getProducts():Observable<ProductDto[]> {
    return this.http.get<ProductDto[]>(environment.serverURL + 'Products');
  }

  addProduct(productDto:ProductDto) : any {
    return this.http.post(environment.serverURL + 'Products', ProductDto);
  }

  createOrder(orderDto:OrderDto, id:number) : any {
    return this.http.post(environment.serverURL + "Orders?userId=" + id, orderDto);
  }

  getOrders(id:number | null):Observable<OrderDto[]> {
    return this.http.get<OrderDto[]>(environment.serverURL + 'Orders/Customer/' + id)
  }
  getOrder(id:number | null):any {
    return this.http.get<OrderDto>(environment.serverURL + 'Orders/' + id)
  }
  getOrdersPostal(id:number | null):Observable<OrderDto[]> {
    return this.http.get<OrderDto[]>(environment.serverURL + 'Orders/PostalH/' + id)
  }
  orderDelivered(id:number | null):any {
    return this.http.get(environment.serverURL + "Orders/Delivered/" + id);
  }
  getOrdersAdmin():Observable<OrderDto[]>{
    return this.http.get<OrderDto[]>(environment.serverURL + 'Orders/Admin');
  }
  verify(postalId:number, yes:boolean){
    return this.http.get(environment.serverURL + 'Users/verify?id=' + postalId + '&yes=' + yes);
  }
  getFreeOrdersPostal():Observable<OrderDto[]> {
    return this.http.get<OrderDto[]>(environment.serverURL + 'Orders/Postal')
  }
  reserveOrder(id:number, postalId:number){
    return this.http.get(environment.serverURL + 'Orders/Reserve/' + postalId + '/' + id);
  }
}