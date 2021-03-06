import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {APIInterceptor} from "./module/HttpInterceptor";
import { FooterComponent } from './Core/footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { FormsModule }   from '@angular/forms';
import { PizzaComponent } from './components/pizza/pizza.component';
import { HeaderComponent } from './Core/header/header.component'
import { CookieService } from 'ngx-cookie-service'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    CartComponent,
    PizzaComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: APIInterceptor,
    multi: true,
  },
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
