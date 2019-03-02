import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhischelRoutingModule } from './phischel-routing.module';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { AdminModule } from './admin/admin.module';
import { PhischelComponent } from './phischel.component';

import { SubsidiaryComponent } from './subsidiary/subsidiary.component';
import { GeneralViewComponent } from './general-view/general-view.component';

@NgModule({
  declarations: [
    SubsidiaryComponent,
    GeneralViewComponent,
    PhischelComponent
  ],
  imports: [
    CommonModule,
    AdminModule,
    PhischelRoutingModule
  ],
  exports: [ ]
})
export class PhischelModule { }
