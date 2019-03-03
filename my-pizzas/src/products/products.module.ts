import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, NgModel } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { StoreModule } from '@ngrx/store';

import { reducers }  from './store';


import * as fromComponents from './components';

import * as fromContainers from './contaniers';


import * as fromServices from './services';

export const ROUTES: Routes= [
  { 
   path: '',
   component: fromContainers.ProductItemComponent,
  },
  {
   path: ':id',
   component: fromContainers.ProductItemComponent,
  },
  {
    path: 'new',
    component: fromContainers.ProductItemComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(ROUTES),
    StoreModule.forFeature('products', reducers)
  ],
  providers: [...fromServices.services],
  declarations: [...fromContainers.contaniers, ...fromComponents.components],
  exports: [...fromContainers.contaniers, ...fromComponents.components]
})

export class ProductsModule {}
