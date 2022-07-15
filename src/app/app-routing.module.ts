import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateOrderComponent } from './create-order/create-order.component';
import { ViewPostalComponent } from './holder/view-postal/view-postal.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponentComponent } from './register-component/register-component.component';
import { ReserveOrderComponent } from './reserve-order/reserve-order.component';
import { ViewOrderComponent } from './view-order/view-order.component';
import { ViewOrdersAdminComponent } from './view-orders-admin/view-orders-admin.component';
import { ViewOrdersPostalComponent } from './view-orders-postal/view-orders-postal.component';
import { ViewOrdersComponent } from './view-orders/view-orders.component';

const routes: Routes = [
  {path:'register', component:RegisterComponentComponent},
  {path:'login', component:LoginComponent},
  {path:'', redirectTo:'register', pathMatch:'full'},
  {path:'profile', component:ProfileComponent},
  {path:'order', component:CreateOrderComponent},
  {path:'orders', component:ViewOrdersComponent},
  {path:'postalOrders', component:ViewOrdersPostalComponent},
  {path:'currOrder', component:ViewOrderComponent},
  {path:'adminOrders', component:ViewOrdersAdminComponent},
  {path:'postals', component:ViewPostalComponent},
  {path:'freeOrders', component:ReserveOrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
