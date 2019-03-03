import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
//import { Observable } from 'rxjs/Observable';
import * as fromStore from '../../store';

import { Pizza } from '../../models/pizza.model';
import { from } from 'rxjs';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private store: Store<fromStore.ProductsState>) { }

  ngOnInit() {
    // this.store.select<any>('products').subscribe(state => {
    //   console.log(state);
    // } )
  }

}
