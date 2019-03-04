import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BombaticaComponent } from './bombatica.component';
import { GeneralViewComponent } from './general-view/general-view.component';

const routes: Routes = [
    { path: 'bombatica', component: BombaticaComponent,
    children: [
        { path: 'home', component: GeneralViewComponent },
        { path: '', redirectTo: '/bombatica/home', pathMatch: 'full' }
    ] }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BombaticaRoutingModule { }