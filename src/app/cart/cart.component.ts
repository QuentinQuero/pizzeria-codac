import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  // name: string
  // id: number = 0

  // listCart() {
  //   var pizza
  //   var cart = document.cookie.split('; ')
  //   cart.forEach(function (item) {
  //     pizza = item.split('=')[1],
  //     console.log(pizza)
  //   });
  // }

  // addToCart(f: NgForm) {
  //     this.name = f.value.name
  //     console.log(this.name)
  //     document.cookie = "pizza"+this.id+"="+this.name;
  //     this.id++
  // }

  constructor(private _httpClient: HttpClient) { }

  pizzacreateds: Object = [];
  pizzas: Object = [];
  doughs: Object = [];
  sizes: Object = [];

  createPizza(qty, name, dough, size) {
    this._httpClient.post('pizza-createds', {number: qty, pizza: name, dough: dough, pizza_size: size})
      .subscribe(pizzacreateds => {

        this.pizzacreateds = pizzacreateds;
        console.log(pizzacreateds)
      });
  }

  ngOnInit(): void {
    this._httpClient.get('pizza-createds')
      .subscribe(pizzacreateds => {

        this.pizzacreateds = pizzacreateds;
        console.log(pizzacreateds)
      });

      this._httpClient.get('pizzas')
      .subscribe(pizza => {
        this.pizzas = pizza;
      });

      this._httpClient.get('doughs')
      .subscribe(dough => {
        this.doughs = dough;
      });

      this._httpClient.get('pizza-sizes')
      .subscribe(size => {
        this.sizes = size;
      });
  }

}
