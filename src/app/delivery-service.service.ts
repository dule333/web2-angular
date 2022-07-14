import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PostalDto } from './shared/models/postalDto.model';
import { RegisterDto } from './shared/models/registerDto.model';

@Injectable({
  providedIn: 'root'
})
export class DeliveryServiceService {

  constructor(private http:HttpClient) { }

  getInspectionList(id:any):Observable<any[]> {
    return this.http.get<any>(environment.serverURL + 'Users/' + id);
  }

  registerUser(data:any) {
    return this.http.post(environment.serverURL + 'Users', data);
  }

  loginUser(data:any) {
    return this.http.post<any>(environment.serverURL + "Users/login",data);
  }
  getPostals():Observable<PostalDto[]> {
    return this.http.get<PostalDto[]>(environment.serverURL + 'Users')
  }
}