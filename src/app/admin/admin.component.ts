import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  commandes:Object = [];
  pizzacreateds: Object = [];

  constructor(private _httpClient: HttpClient) { }

  ngOnInit(): void {
    this._httpClient.get('commandes')
      .subscribe(commandes => {

        this.commandes = commandes;
      });
    this._httpClient.get('pizza-createds')
    .subscribe(pizzacreateds => {

      this.pizzacreateds = pizzacreateds;
      console.log(pizzacreateds)
    });
  }

  changeAccepted(isAccepted, id) {
    console.log(isAccepted);
    console.log(id);
    this._httpClient.put(`commandes/${id}`,{ "accepted": isAccepted})
      .subscribe(commande => {
      console.log(commande);
    });
  }

  changePayed(isPayed, id) {
    console.log(isPayed);
    console.log(id);
    this._httpClient.put(`commandes/${id}`,{ "payed": isPayed})
      .subscribe(commande => {
      console.log(commande);
    });
  }

  changeSent(isSent, id) {
    console.log(isSent);
    console.log(id);
    this._httpClient.put(`commandes/${id}`,{ "sent": isSent})
      .subscribe(commande => {
        console.log(commande);
    });
  }
}
