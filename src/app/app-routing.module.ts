import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FurnitureComponent } from './pages/furniture/furniture.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ContactusComponent } from './pages/contactus/contactus.component';


const routes: Routes = [
{path:'', component:HomeComponent},
{path:'home',component:HomeComponent},
{path:'furniture', component: FurnitureComponent}, 
{path:'checkout', component: CheckoutComponent},
{path:'aboutus', component: AboutusComponent},
{path:'contactus', component: ContactusComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
