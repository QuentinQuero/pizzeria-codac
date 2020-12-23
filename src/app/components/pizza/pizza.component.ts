import {Component, Input, OnInit, Output} from '@angular/core';
import {EventEmitter} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {

  @Input() pizza: {name, base, price, ingredients:[{name}], image: {url}};
  @Input() sizes;
  @Input() douths;
  @Output() pizzaEvent = new EventEmitter<Object>();

  numberPizzas = 1;
  sizeSelected = null;
  doughSelected = null;

  constructor(private _httpClient: HttpClient) { }

  ngOnInit(): void {
  }


  public validatePizzaSelection () {
    let currentSize = this.sizes.find(sizeSelected => sizeSelected.name == this.sizeSelected);
    let currentDough = this.douths.find(doughSelected => doughSelected.name == this.doughSelected);

    let objToSend = {
      number: this.numberPizzas,
      pizza: this.pizza,
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
