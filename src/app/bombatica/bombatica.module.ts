import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BombaticaRoutingModule } from './bombatica-routing.module';
import { AdminModule } from './admin/admin.module';

import { BombaticaComponent } from './bombatica.component';
import { GeneralViewComponent } from './general-view/general-view.component';
import { SubsidiaryModule } from './subsidiary/subsidiary.module';
import { ProductsComponent } from './general-view/products/products.component';
import { LoginComponent } from './general-view/login/login.component';
import { RegisterComponent } from './general-view/register/register.component';
import { RecipieComponent } from './general-view/recipie/recipie.component';
import { UserComponent } from './general-view/user/user.component';

@NgModule({
  declarations: [
    BombaticaComponent,
    GeneralViewComponent,
    ProductsComponent,
    LoginComponent,
    RegisterComponent,
    RecipieComponent,
    UserComponent,
  ],
  imports: [
    CommonModule,
    CommonModule,
    AdminModule,
    SubsidiaryModule,
    BombaticaRoutingModule
  ]
})
export class BombaticaModule { }
