import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  name: string
  id: number = 0

  listCart() {
    var pizza
    var cart = document.cookie.split('; ')
    cart.forEach(function (item) {
      pizza = item.split('=')[1],
      console.log(pizza)
    });
  }

  addToCart(f: NgForm) {
      this.name = f.value.name
      console.log(this.name)
      document.cookie = "pizza"+this.id+"="+this.name;
      this.id++
  }

  constructor() {}

  ngOnInit(): void {}

}
