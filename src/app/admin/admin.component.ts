import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  commandes:Object = [];

  constructor(private _httpClient: HttpClient) { }

  ngOnInit(): void {
    this._httpClient.get('commandes')
      .subscribe(commandes => {

        this.commandes = commandes;
      });
  }
  modifyAccepted (f: NgForm) {
    let idcommand = f.value.idcommand;
    console.log(idcommand);
    this._httpClient.put(`commandes/${idcommand}`,{ "accepted": true})
  }
}
