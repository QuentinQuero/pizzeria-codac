import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private cookieValue: string;
  pizzas: Object = [];
  pizza_size = [];
  doughs = [];

  pizzaSelected : {name, base, price, ingredients:[{name}], image: {url}};
  numberPizzas = 1;
  sizeSelected = null;
  doughSelected = null;
  constructor(private _httpClient: HttpClient,private cookieService: CookieService) { }


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

    this._httpClient.post('pizza-createds', objToSend)
      .subscribe(response => {
        // @ts-ignore
        this.addPizza(response.id);
      });

  }

  addPizza(id){
    let pizzas:Array<number>
    if (this.cookieService.check('pizza')) {
      pizzas = JSON.parse(this.cookieService.get('pizza'));
    } else  {
      pizzas = [];
    }
    pizzas.push(id);
    this.cookieService.set('pizza', JSON.stringify(pizzas));
  }

}
