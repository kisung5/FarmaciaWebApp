import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhischelRoutingModule } from './phischel-routing.module';
import { PhischelComponent } from './phischel.component';
import { AdminComponent } from './admin/admin.component';
import { SubsidiaryComponent } from './subsidiary/subsidiary.component';
import { GeneralViewComponent } from './general-view/general-view.component';

@NgModule({
  declarations: [
    AdminComponent,
    SubsidiaryComponent,
    GeneralViewComponent,
    PhischelComponent
  ],
  imports: [
    CommonModule,
    PhischelRoutingModule
  ]
})
export class PhischelModule { }
