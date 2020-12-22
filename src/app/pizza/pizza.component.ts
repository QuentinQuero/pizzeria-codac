import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {

  @Input() pizza: {name, base, price, ingredients:[{name}], img: {url}};

  constructor() { }

  ngOnInit(): void {
  }

}
