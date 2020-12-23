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

  pizzaInCarts = [19, 20, 21]

  pizzas = [];
  doughs: Object = [];
  sizes: Object = [];

  createPizza(f: NgForm) {
    var newPizza = {
      number: f.value.qty,
      pizza: f.value.name,
      dough: f.value.dough,
      pizza_size: f.value.size
    };
    this._httpClient.post('pizza-createds', newPizza)
      .subscribe(pizzacreateds => {
        console.log(pizzacreateds)
      });
  }

  createCommande(pizzas) {
    var newCommande = {
      payed: false,
      pizza_createds: pizzas
    };
    this._httpClient.post('commandes', newCommande)
      .subscribe(commandes => {
        console.log(commandes)
      });
  }

  getCount() {
    var count = 0;
    this.pizzas.forEach(pizza => {
      count += pizza.number * (pizza.pizza.price + pizza.dough.addedPrice + pizza.pizza_size.addedPrice);
    })
    return count;
  }

  getCart(id) {
    this._httpClient.get(`pizza-createds/${id}`)
      .subscribe(pizzaInCarts => {
        this.pizzas.push(pizzaInCarts);
      });
  }


  ngOnInit(): void {

    this._httpClient.get('doughs')
      .subscribe(doughs => {
        this.doughs = doughs;
    });

    this._httpClient.get('pizza-sizes')
      .subscribe(sizes => {
        this.sizes = sizes;
    });

    this.pizzaInCarts.forEach(pizzaCreated => {
      this.getCart(pizzaCreated);
    })
  }

}
