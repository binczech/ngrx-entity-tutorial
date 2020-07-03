import { Action } from '@ngrx/store';
import { Pizza } from './../reducers/pizza.reducer';

export const CREATE = '[Pizzas] Create';
export const UPDATE = '[Pizzas] Update';
export const DELETE = '[Pizzas] Delete';

export class Create implements Action {
    readonly type = CREATE;
    // V constructoru definujeme data
    constructor(public pizza: Pizza) {}
}

export class Update implements Action {
    readonly type = UPDATE;
    // V constructoru definujeme data
    constructor(
        public id: string,
        public changes: Partial<Pizza>
    ) {}
}

export class Delete implements Action {
    readonly type = DELETE;
    // V constructoru definujeme data
    constructor(public id: string) {}
}

export type PizzaActions
= Create
| Update
| Delete;
