import { NgModule } from '@angular/core';
import { FactComponent } from './fact/fact.component';
import { BreedsComponent } from './breeds/breeds.component';
import { Route, RouterModule } from "@angular/router";
import { ModuleWithProviders } from '@angular/core';

const APPROUTE: Route[]=  [
  {path: "", component:BreedsComponent},
  {path: "facts", component:FactComponent}

]

export const Routing: ModuleWithProviders<any>= RouterModule.forRoot(APPROUTE)
