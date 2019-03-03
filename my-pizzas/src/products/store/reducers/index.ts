import { ActionReducerMap }  from '@ngrx/store';

import * as fromPizzas from '../reducers/pizzas.reducer'

//new interface that uses another interface further down the state tree
export interface ProductsState {
  pizzas: fromPizzas.PizzaState
}

export const reducers: ActionReducerMap<ProductsState> = {
  pizzas: fromPizzas.reducer
};