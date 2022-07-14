import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponentComponent } from './register-component/register-component.component';

const routes: Routes = [
  {path:'register', component:RegisterComponentComponent},
  {path:'login', component:LoginComponent},
  {path:'', redirectTo:'register', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
