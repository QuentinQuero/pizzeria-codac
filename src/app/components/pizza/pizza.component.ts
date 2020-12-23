import {Component, Input, OnInit, Output} from '@angular/core';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {

  @Input() pizza: {name, base, price, ingredients:[{name}], image: {url}};
  @Input() sizes;
  @Input() douth;
  @Output() pizzaEvent = new EventEmitter<Object>();

  constructor() { }

  ngOnInit(): void {
  }

  public onClick = pizza => {
    this.pizzaEvent.emit(pizza);
  }

}
