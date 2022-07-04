import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CepSearchComponent } from './components/cep-search/cep-search.component';
import { AddressSearchComponent } from './components/address-search/address-search.component';

@NgModule({
  declarations: [
    AppComponent,
    CepSearchComponent,
    AddressSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
