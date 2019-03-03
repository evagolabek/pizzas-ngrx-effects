import { Action } from '@ngrx/store';
import { Pizza } from '../../models/pizza.model';

export enum PizzaActionTypes {
LoadPizzas = '[Products] Load Pizzas',
LoadPizzasFail = '[Products] Load Pizzas Fail',
LoadPizzasSuccess = '[Products] Load Pizzas Success'
}

export class LoadPizzas implements Action {
  readonly type = PizzaActionTypes.LoadPizzas;
  //constructor(public payload: {})
}

export class LoadPizzasSuccess implements Action {
  readonly type = PizzaActionTypes.LoadPizzasSuccess;

  //pizza array payload
  constructor(public payload: { pizzas: Pizza[], success: string }) {}
}

export class LoadPizzasFail implements Action {
  readonly type = PizzaActionTypes.LoadPizzasFail;
  //in order to pass the message as a payload from the server if there is an error
  constructor(public payload: { message: string }) {}
}

//action types
export type PizzaActions = LoadPizzas | LoadPizzasFail | LoadPizzasSuccess;