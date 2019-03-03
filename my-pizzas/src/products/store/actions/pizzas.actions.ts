import { Action } from '@ngrx/store';

import { Pizza } from '../../models/pizza.model';

//load pizzas 
export const LOAD_PIZZAS = '[Products] Load Pizzas';
export const LOAD_PIZZAS_FAIL = '[Products] Load Pizzas Fail';
export const LOAD_PIZZAS_SUCCESS = '[Products] Load Pizzas Success' ;

export class LoadPizzas implements Action {
  readonly type = LOAD_PIZZAS;
}

export class LoadPizzasFail implements Action {
  readonly type = LOAD_PIZZAS_FAIL;
  //in order to pass the message as a payload from the server if there is an error
  constructor(public payload: any) {}
}

export class LoadPizzasSuccess implements Action {
  readonly type = LOAD_PIZZAS_SUCCESS;

  //pizza array payload
  constructor(public payload: Pizza[]) {}
}

//action types

export type PizzasAction = LoadPizzas | LoadPizzasFail | LoadPizzasSuccess;