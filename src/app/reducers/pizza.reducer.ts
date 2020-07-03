import * as actions from './../actions/pizza.actions';
import { EntityState, createEntityAdapter} from '@ngrx/entity';
import { createFeatureSelector } from '@ngrx/store';


// basic interface, jak budou vypadat data
export interface Pizza{
    id: string;
    size: string;
}

// ten interface použijeme pro vytvoření entity adaptéru
// ten bude formátovat data specifickým způsobem
// taky bude poskytovat helpery pro provádění CRUD operací
export const PizzaAdapter = createEntityAdapter<Pizza>();

// Pizza interface musí být součástí main app state
// Entita je interface, který dává datům konzistentní
// strukturu
export interface PizzaState extends EntityState<Pizza> {  }

// Příklad statu, tohle je initial state
const defaultPizza = {
    ids: ['123'],
    entities: {
        123: {
            id: '123',
            size: 'small'
        }
    }
};

export const initialState: PizzaState = PizzaAdapter.getInitialState(defaultPizza);

export function PizzaReducer(
    // předcházející stav
    state: PizzaState = initialState,
    // korespondující akce
    action: actions.PizzaActions
): PizzaState {
    switch (action.type) {
        case actions.CREATE:
            return PizzaAdapter.addOne(action.pizza, state);
        case actions.UPDATE:
            return PizzaAdapter.updateOne({
                id: action.id,
                changes: action.changes
            }, state);
        case actions.DELETE:
            return PizzaAdapter.removeOne(action.id, state);
        default:
            return state;
    }
}

// Nyn potřebujeme selectory, abychom získali data ze storu
export const getPizzaState = createFeatureSelector<PizzaState>('pizza');

// defaultní selectory
export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal
} = PizzaAdapter.getSelectors(getPizzaState);
