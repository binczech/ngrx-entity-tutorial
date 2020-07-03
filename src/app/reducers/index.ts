import { ActionReducerMap } from '@ngrx/store';
import { PizzaReducer } from './pizza.reducer';

export const REDUCERS: ActionReducerMap<any> = {
    Pizza: PizzaReducer
};
