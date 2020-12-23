import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pizzas: Object = [];
  pizza_size = [];
  doughs = [];

  pizzaSelected = {};

  numberPizzas = 1;
  sizeSelected = null;
  doughSelected = null;


  constructor(private _httpClient: HttpClient) { }

  ngOnInit(): void {
    this._httpClient.get('pizzas')
      .subscribe(pizzas => {

        this.pizzas = pizzas;
      });
    this._httpClient.get('pizza-sizes')
      .subscribe(pizza_size => {
        // @ts-ignore
        this.pizza_size = pizza_size;
      });
    this._httpClient.get('doughs')
      .subscribe(dough => {
        // @ts-ignore
        this.doughs = dough;
      });
  }

  selectPizza(pizza){
    this.pizzaSelected = pizza;
    // this._httpClient.post('pizza-createds', {pizza})
    //   .subscribe(pizzas => {
    //
    //     this.pizzas = pizzas;
    //   });
  }


  public validatePizzaSelection () {
    let currentSize = this.pizza_size.find(sizeSelected => sizeSelected.name == this.sizeSelected);
    let currentDough = this.doughs.find(doughSelected => doughSelected.name == this.doughSelected);

    let objToSend = {
      number: this.numberPizzas,
      pizza: this.pizzaSelected,
      dough: currentDough,
      pizza_size: currentSize
    }

    // number: f.value.qty,
    //   pizza: f.value.name,
    //   dough: f.value.dough,
    //   pizza_size: f.value.size

    this._httpClient.post('pizza-createds', objToSend)
      .subscribe(response => {
        console.log(response);
      });

  }

}
