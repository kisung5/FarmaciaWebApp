import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhischelRoutingModule } from './phischel-routing.module';
import { AdminModule } from './admin/admin.module';
import { PhischelComponent } from './phischel.component';

import { GeneralViewComponent } from './general-view/general-view.component';
import { SubsidiaryModule } from './subsidiary/subsidiary.module';


@NgModule({
  declarations: [
    GeneralViewComponent,
    PhischelComponent,
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
