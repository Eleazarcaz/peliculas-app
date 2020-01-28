import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { HttpClientJsonpModule } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, SearchComponent, NavbarComponent, CardComponent],
  imports: [BrowserModule, HttpClientJsonpModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
