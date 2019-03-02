import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhischelComponent } from './phischel.component';
import { SubsidiaryComponent } from './subsidiary/subsidiary.component';
import { GeneralViewComponent } from './general-view/general-view.component';
import { OrdersComponent } from '../orders/orders.component';

const routes: Routes = [
  { path: 'phischel', component: PhischelComponent,
    children: [
      { path: 'sucursal', component: SubsidiaryComponent,
        children:[
          { path: 'pedidos', component: OrdersComponent}
        ]},
      { path: 'home', component: GeneralViewComponent },
      { path: '', redirectTo: '/phischel/home', pathMatch: 'full' }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PhischelRoutingModule { }