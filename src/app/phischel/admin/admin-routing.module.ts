import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientsComponent } from '../../clients/clients.component';
import { DoctorsComponent } from '../../doctors/doctors.component';
import { MedicinesComponent } from '../../medicines/medicines.component';
import { LocationsComponent } from '../../locations/locations.component';
import { RolesComponent } from '../../roles/roles.component';
import { AdminComponent } from './admin.component';
// import { LoginComponent } from '../admin/login/login.component';
import { AuthGuard } from '../admin/auth/auth.guard';

const routes: Routes = [
  { path: 'phischel/admin', component: AdminComponent, canActivate: [AuthGuard], 
  children:[
    { path: 'clientes', component: ClientsComponent /* , canActivate: [AuthGuard] */},
    { path: 'doctores', component: DoctorsComponent /* , canActivate: [AuthGuard] */},
    { path: 'medicinas', component: MedicinesComponent /* , canActivate: [AuthGuard] */},
    { path: 'sucursales', component: LocationsComponent /* , canActivate: [AuthGuard] */},
    { path: 'roles', component: RolesComponent /* , canActivate: [AuthGuard] */}
  ]}
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule { }
