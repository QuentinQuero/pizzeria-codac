import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pizzeria-codac';
  pizza = {name: '4 fromages', base:'fromage', price:'8$',ingredients:['fromage1','fromage2','fromage3']}
}
