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

  pizzaInCarts = [19, 20, 21] // todo remplacer par les cookies de la commande

  pizzas = [];
  doughs: Object = [];
  sizes: Object = [];

  calculTotalPrice() {
    let count = 0;
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
