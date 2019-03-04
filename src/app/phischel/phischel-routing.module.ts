import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhischelComponent } from './phischel.component';
import { GeneralViewComponent } from './general-view/general-view.component';
import { ProductsComponent } from './general-view/products/products.component';
import { LoginComponent } from './general-view/login/login.component';
import { RegisterComponent } from './general-view/register/register.component';
import { RecipieComponent } from './general-view/recipie/recipie.component';
import { UserComponent } from './general-view/user/user.component';

const routes: Routes = [
  { path: 'phischel', component: PhischelComponent,
    children: [
      { path: 'home', component: GeneralViewComponent , children: [
        { path: '', component: ProductsComponent },
        { path: 'login', component: LoginComponent},
        { path: 'register', component: RegisterComponent},
        { path: 'recipie', component: RecipieComponent},
        { path: 'user', component: UserComponent}
      ]},
      { path: '', redirectTo: '/phischel/home', pathMatch: 'full' }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PhischelRoutingModule { }