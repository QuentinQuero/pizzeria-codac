import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private _httpClient: HttpClient, private cookieService: CookieService) { }

  pizzaInCarts = []

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

  calculOnePrice(id) {
    let count = 0;
    count += this.pizzas[id].number * (this.pizzas[id].pizza.price + this.pizzas[id].dough.addedPrice + this.pizzas[id].pizza_size.addedPrice);
    return count;
  }

  quantityChange(qty, index) {
    this.pizzas[index].number = qty
    console.log
  }

  doughChange(dough, index) {
    this.pizzas[index].dough.id = dough
  }

  sizeChange(size, index) {
    this.pizzas[index].pizza_size.id = size
  }

  getCart(id) {
    this._httpClient.get(`pizza-createds/${id}`)
      .subscribe(pizzaInCarts => {
        this.pizzas.push(pizzaInCarts);
      });
  }

  getPizzaInCookies(){
    if (this.cookieService.check('pizza')) {
     this.pizzaInCarts = JSON.parse(this.cookieService.get('pizza'));
    } else  {
      this.pizzaInCarts = [];
    }
  }

  deleteInCookies(id) {
    let cookies = JSON.parse(this.cookieService.get('pizza'));
    for(var i= 0; i < cookies.length; i++){
      if (cookies[i] == id) {
        cookies.splice(i, 1)
        this.cookieService.set('pizza', JSON.stringify(cookies));
      }
    }
    console.log(this.pizzas)
    for(var i= 0; i < this.pizzas.length; i++){
      if (this.pizzas[i].id == id) {
        this.pizzas.splice(i, 1)
      }
    }
    console.log(this.pizzas)
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

    this.getPizzaInCookies();

    this.pizzaInCarts.forEach(pizzaCreated => {
      this.getCart(pizzaCreated);
    })
  }

}
