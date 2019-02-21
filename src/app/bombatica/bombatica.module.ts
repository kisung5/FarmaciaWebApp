import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BombaticaRoutingModule } from './bombatica-routing.module';

import { BombaticaComponent } from './bombatica.component';
import { AdminComponent } from './admin/admin.component';
import { SubsidiaryComponent } from './subsidiary/subsidiary.component';
import { GeneralViewComponent } from './general-view/general-view.component';

@NgModule({
  declarations: [
    AdminComponent,
    BombaticaComponent,
    SubsidiaryComponent,
    GeneralViewComponent
  ],
  imports: [
    CommonModule,
    BombaticaRoutingModule
  ]
})
export class BombaticaModule { }
