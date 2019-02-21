import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BombaticaComponent } from './bombatica.component';
import { AdminComponent } from './admin/admin.component';
import { SubsidiaryComponent } from './subsidiary/subsidiary.component';
import { GeneralViewComponent } from './general-view/general-view.component';

const routes: Routes = [
    { path: 'bombatica', component: BombaticaComponent,
    children: [
        { path: 'admin', component: AdminComponent },
        { path: 'sucursal', component: SubsidiaryComponent },
        { path: 'home', component: GeneralViewComponent }
    ] }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BombaticaRoutingModule { }