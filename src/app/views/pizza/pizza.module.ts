import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzaComponent } from './pizza.component';
import { StoreModule } from '@ngrx/store';
import { PizzaReducer } from '../../reducers/pizza.reducer';



@NgModule({
  declarations: [PizzaComponent],
  exports: [PizzaComponent],
  imports: [
    CommonModule,
    // Name of a reducer and reducer itself
    StoreModule.forFeature('pizza', PizzaReducer)
  ]
})
export class PizzaModule { }
