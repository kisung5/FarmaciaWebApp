import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { PhischelModule } from './phischel/phischel.module';
import { BombaticaModule } from './bombatica/bombatica.module';

import { AppComponent } from './app.component';
import { ClientsComponent } from './clients/clients.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { MedicinesComponent } from './medicines/medicines.component';
import { RolesComponent } from './roles/roles.component';
import { LocationsComponent } from './locations/locations.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    DoctorsComponent,
    MedicinesComponent,
    RolesComponent,
    LocationsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, //<----Ng Model lives here.
    AppRoutingModule,
    PhischelModule,
    BombaticaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
