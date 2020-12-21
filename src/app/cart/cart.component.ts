import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private _httpClient: HttpClient) { }

  pizzacreateds: Object = [];

  createPizza(f: NgForm) {
    var newPizza = {
      number: f.value.qty,
      pizza: f.value.name,
      dough: f.value.dough,
      pizza_size: f.value.size
    };
    this._httpClient.post('pizza-createds', newPizza)
      .subscribe(pizzacreateds => {
        this.pizzacreateds = pizzacreateds;
        console.log(pizzacreateds)
      });
  }

  getCount() {
    var count = 0;
    for (const [key, value] of Object.entries(this.pizzacreateds)) {
      count += value.number * (value.pizza.price + value.dough.addedPrice + value.pizza_size.addedPrice);
    }
    return count;
  }


  ngOnInit(): void {
    this._httpClient.get('pizza-createds')
      .subscribe(pizzacreateds => {
        this.pizzacreateds = pizzacreateds;
        console.log(pizzacreateds)
      });
  }

}
