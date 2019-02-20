import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientsComponent } from './clients/clients.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { MedicinesComponent } from './medicines/medicines.component';
import { RolesComponent } from './roles/roles.component';
import { LocationsComponent } from './locations/locations.component';
import { AdminComponent } from './admin/admin.component';
import { SubsidiaryComponent } from './subsidiary/subsidiary.component';
import { GeneralViewComponent } from './general-view/general-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    DoctorsComponent,
    MedicinesComponent,
    RolesComponent,
    LocationsComponent,
    AdminComponent,
    SubsidiaryComponent,
    GeneralViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
