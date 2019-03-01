import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BombaticaComponent } from './bombatica.component';
import { AdminComponent } from './admin/admin.component';
import { SubsidiaryComponent } from './subsidiary/subsidiary.component';
import { GeneralViewComponent } from './general-view/general-view.component';
import { ClientsComponent } from '../clients/clients.component';
import { DoctorsComponent } from '../doctors/doctors.component';
import { MedicinesComponent } from '../medicines/medicines.component';
import { LocationsComponent } from '../locations/locations.component';
import { RolesComponent } from '../roles/roles.component';

const routes: Routes = [
    { path: 'bombatica', component: BombaticaComponent,
    children: [
        { path: 'admin', component: AdminComponent, 
        children: [
          { path: 'clientes', component: ClientsComponent },
          { path: 'doctores', component: DoctorsComponent },
          { path: 'medicinas', component: MedicinesComponent },
          { path: 'sucursales', component: LocationsComponent },
          { path: 'roles', component: RolesComponent }
        ]},
        { path: 'sucursal', component: SubsidiaryComponent },
        { path: 'home', component: GeneralViewComponent },
        { path: '', redirectTo: '/phischel/home', pathMatch: 'full' }
    ] }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BombaticaRoutingModule { }