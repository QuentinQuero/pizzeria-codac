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

  // pizzaInCarts: Array<{id: number, number: number, name: string, dough: string, pizza_size: string}>= [];
  pizzaInCarts: Object = [];

  pizzas: Object = [];
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
    for (const [key, value] of Object.entries(this.pizzaInCarts)) {
      count += value.number * (value.pizza.price + value.dough.addedPrice + value.pizza_size.addedPrice);
    }
    return count;
  }

  // getCart(id) {
  //   this._httpClient.get(`pizza-createds/${id}`)
  //     .subscribe(pizzaInCarts => {
  //       // this.pizzaInCarts.push(pizzaInCarts)
  //       console.log(pizzaInCarts)
  //     });
  // }


  ngOnInit(): void {
    this._httpClient.get('pizzas')
      .subscribe(pizzas => {
        this.pizzas = pizzas;
    });

    this._httpClient.get('doughs')
      .subscribe(doughs => {
        this.doughs = doughs;
    });

    this._httpClient.get('pizza-sizes')
      .subscribe(sizes => {
        this.sizes = sizes;
    });

    this._httpClient.get('pizza-createds')
      .subscribe(pizzaInCarts => {
        this.pizzaInCarts = pizzaInCarts;
    });
    // this.getCart(18)
  }

}
