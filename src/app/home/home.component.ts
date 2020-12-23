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
  pizza_size = {};
  dough: Object = [];

  constructor(private _httpClient: HttpClient,private cookieService: CookieService) { }


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
    this.cookieService.set('pizza_cookies', 'pizza');
    this.cookieValue = this.cookieService.get('pizza_cookies');
  }



  createPizza(pizza){

    // this._httpClient.post('pizza-createds', {pizza})
    //   .subscribe(pizzas => {
    //
    //     this.pizzas = pizzas;
    //   });
  }

  addPizza(id){
    let json = [];
    json[id] ++;
    this.cookieService.set('pizza', JSON.stringify(json));
  }

  removePizza(id){
    let json = JSON.parse(this.cookieService.get('pizza'));
      if (json[id] > 0)
        json[id]--;

    this.cookieService.set('pizza', JSON.stringify(json));
  }

  getAllPizza(){
    return JSON.parse(this.cookieService.get('pizza'));
  }
}
