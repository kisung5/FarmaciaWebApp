import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubsidiaryComponent } from './subsidiary.component';
import { OrdersComponent } from '../../orders/orders.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
    { path: 'bombatica/sucursal', component: SubsidiaryComponent, canActivate: [AuthGuard],
    children:[
        { path: '', component: OrdersComponent}
    ]},
    { path: 'bombatica/sucursal/login', component: LoginComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SubsidiaryRoutingModule { }