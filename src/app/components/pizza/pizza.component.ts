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

  constructor(private _httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  sendPizza(){
    this.pizzaEvent.emit(this.pizza);
  }



}
