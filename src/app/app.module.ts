import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Toast, ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import { RegisterComponentComponent } from './register-component/register-component.component';
import { DeliveryServiceService } from './delivery-service.service';
import { HolderComponent } from './holder/holder.component';
import { ViewPostalComponent } from './holder/view-postal/view-postal.component';
import { LoginComponent } from './login/login.component';
import { AddProductComponent } from './add-product/add-product.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { ProfileComponent } from './profile/profile.component';
import { ViewOrdersComponent } from './view-orders/view-orders.component';
import { ViewOrdersPostalComponent } from './view-orders-postal/view-orders-postal.component';
import { ViewOrderComponent } from './view-order/view-order.component';
import { ViewOrdersAdminComponent } from './view-orders-admin/view-orders-admin.component';
import { ReserveOrderComponent } from './reserve-order/reserve-order.component';
import {JwtModule} from '@auth0/angular-jwt';
import { AuthInterceptor } from './auth.interceptor';
import { DashboardComponent } from './dashboard/dashboard.component';
export function tokenGetter() {
  return localStorage.getItem("token");
}
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponentComponent,
    HolderComponent,
    ViewPostalComponent,
    LoginComponent,
    AddProductComponent,
    CreateOrderComponent,
    ProfileComponent,
    ViewOrdersComponent,
    ViewOrdersPostalComponent,
    ViewOrderComponent,
    ViewOrdersAdminComponent,
    ReserveOrderComponent,
    DashboardComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ToastrModule.forRoot({progressBar:true}),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: environment.allowedDomains
      }
    })
  ],
  providers: [HttpClientModule,
  {
    provide:HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
