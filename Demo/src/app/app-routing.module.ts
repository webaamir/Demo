import { NgModule }                   from '@angular/core';
import { Routes, RouterModule }       from '@angular/router';
import {CalculationComponent}         from './calculation/calculation.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'Calculation' },
  { path: 'Calculation', component: CalculationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

