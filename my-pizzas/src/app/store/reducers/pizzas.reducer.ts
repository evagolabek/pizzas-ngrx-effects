import * as fromPizzas from '../actions/pizzas.actions';

import { Pizza } from '../../models/pizza.model';

export interface PizzaState {
  data: Pizza[],
  loaded: boolean,
  loading: boolean
}



export const initialState = {
  data: [],
  loaded: false,
  loading: false
};

export function reducer(
  state = initialState,
  action: fromPizzas.PizzaActions
): PizzaState {

  //depending on the case we create variables and return new representation of the state
  switch(action.type) {
    case fromPizzas.PizzaActionTypes.LoadPizzas: {
      return {
        ...state, 
        loading: true
      };
    }

    case fromPizzas.PizzaActionTypes.LoadPizzasSuccess: {
      return {
        ...state, 
        loading: false,
        loaded: true
      };
    }

    case fromPizzas.PizzaActionTypes.LoadPizzasFail: {
      return {
        ...state, 
        loading: false,
        loaded: false
      }
    }
  }
  return state;
}