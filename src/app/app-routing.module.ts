import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhischelComponent } from './phischel/phischel.component';
import { BombaticaComponent } from './bombatica/bombatica.component';
import { AdminComponent } from './admin/admin.component';
import { SubsidiaryComponent } from './subsidiary/subsidiary.component';
import { GeneralViewComponent } from './general-view/general-view.component';

const routes: Routes = [
  { path: 'phischel', component: PhischelComponent },
  { path: 'bombatica', component: BombaticaComponent },
  { path: 'phischel/admin', component: AdminComponent },
  { path: 'phischel/sucursal', component: SubsidiaryComponent },
  { path: 'phischel/home', component: GeneralViewComponent},
  { path: 'phischel', redirectTo: 'phischel/admin', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
