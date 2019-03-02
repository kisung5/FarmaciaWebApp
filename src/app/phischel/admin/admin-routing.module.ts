import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientsComponent } from '../../clients/clients.component';
import { DoctorsComponent } from '../../doctors/doctors.component';
import { MedicinesComponent } from '../../medicines/medicines.component';
import { LocationsComponent } from '../../locations/locations.component';
import { RolesComponent } from '../../roles/roles.component';
import { AdminComponent } from './admin.component';
import { AuthGuard } from '../admin/auth/auth.guard';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'phischel/admin', component: AdminComponent,
  children:[
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent, canActivate: [AuthGuard], children: [
      { path: 'clientes', component: ClientsComponent },
      { path: 'doctores', component: DoctorsComponent },
      { path: 'medicinas', component: MedicinesComponent },
      { path: 'sucursales', component: LocationsComponent },
      { path: 'roles', component: RolesComponent }
    ]}
  ]}
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule { }
