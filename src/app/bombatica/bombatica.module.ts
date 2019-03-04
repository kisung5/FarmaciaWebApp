import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BombaticaRoutingModule } from './bombatica-routing.module';
import { AdminModule } from './admin/admin.module';

import { BombaticaComponent } from './bombatica.component';
import { GeneralViewComponent } from './general-view/general-view.component';
import { SubsidiaryModule } from './subsidiary/subsidiary.module';

@NgModule({
  declarations: [
    BombaticaComponent,
    GeneralViewComponent
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
