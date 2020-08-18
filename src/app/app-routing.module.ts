import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhischelComponent } from './phischel/phischel.component';
import { BombaticaComponent } from './bombatica/bombatica.component';

const routes: Routes = [
  {path: 'bombatica', component: BombaticaComponent},
  { path: '', redirectTo: '/bombatica/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
