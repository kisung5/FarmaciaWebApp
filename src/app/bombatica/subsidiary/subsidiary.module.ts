import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { SubsidiaryComponent } from './subsidiary.component';
import { SubsidiaryRoutingModule } from './subsidiary-routing.module';

@NgModule({
  declarations: [
    SubsidiaryComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    SubsidiaryRoutingModule
  ]
})
export class SubsidiaryModule { }
