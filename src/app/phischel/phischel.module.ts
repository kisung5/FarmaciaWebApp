import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhischelRoutingModule } from './phischel-routing.module';
import { AdminModule } from './admin/admin.module';
import { PhischelComponent } from './phischel.component';

import { GeneralViewComponent } from './general-view/general-view.component';
import { SubsidiaryModule } from './subsidiary/subsidiary.module';
import { ProductsComponent } from './general-view/products/products.component';
import { LoginComponent } from './general-view/login/login.component';
import { RegisterComponent } from './general-view/register/register.component';
import { RecipieComponent } from './general-view/recipie/recipie.component';
import { UserComponent } from './general-view/user/user.component';


@NgModule({
  declarations: [
    GeneralViewComponent,
    PhischelComponent,
    ProductsComponent,
    LoginComponent,
    RegisterComponent,
    RecipieComponent,
    UserComponent,
  ],
  imports: [
    CommonModule,
    AdminModule,
    SubsidiaryModule,
    PhischelRoutingModule
  ],
  exports: [ ]
})
export class PhischelModule { }
