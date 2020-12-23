import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pizzas: Object = [];
  pizza_size = {};
  dough: Object = [];

  constructor(private _httpClient: HttpClient) { }

  ngOnInit(): void {
    this._httpClient.get('pizzas')
      .subscribe(pizzas => {

        this.pizzas = pizzas;
      });
    this._httpClient.get('pizza-sizes')
      .subscribe(pizza_size => {

        this.pizza_size = pizza_size;
      });
    this._httpClient.get('doughs')
      .subscribe(dough => {

        this.dough = dough;
      });
  }

  createPizza(pizza){

    // this._httpClient.post('pizza-createds', {pizza})
    //   .subscribe(pizzas => {
    //
    //     this.pizzas = pizzas;
    //   });
  }

}
