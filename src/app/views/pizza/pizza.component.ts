import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as actions from './../../actions/pizza.actions';
import * as fromPizza from './../../reducers/pizza.reducer';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent implements OnInit {

  pizzas: Observable<any>;

  constructor(private store: Store<fromPizza.PizzaState>) { }

  ngOnInit(): void {
    // načtení dat ze storu
    this.pizzas = this.store.select(fromPizza.selectAll);
  }
  // nastavení event handlerů k triggernutí další akce
  createPizza(): void {
    const pizza: fromPizza.Pizza = {
      id: new Date().getUTCMilliseconds().toString(),
      size: 'small'
    };
    this.store.dispatch(new actions.Create(pizza));
  }

  updatePizza(id, size): void {
    this.store.dispatch(new actions.Update(id, {size}));
  }

  deletePizza(id): void {
    this.store.dispatch(new actions.Delete(id));
  }

}
