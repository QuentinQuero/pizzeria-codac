import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ingredients: Object = [];

  constructor(private _httpClient: HttpClient) { }

  ngOnInit(): void {
    this._httpClient.get('ingredients')
      .subscribe(ingredients => {

        this.ingredients = ingredients;
      });
  }

}
