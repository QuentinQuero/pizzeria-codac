import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pizzeria-codac';
  pizza = {name: '4 Fromages', base:'Fromage', price:'8$',ingredients:['fromage1','fromage2','fromage3'], img:'https://commande.dominos.fr/ManagedAssets/FR/product/P4FR/FR_P4FR_fr_hero_8003.jpg?v-1416700018'}
}
