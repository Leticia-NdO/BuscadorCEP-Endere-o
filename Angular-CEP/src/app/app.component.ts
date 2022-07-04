import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-CEP';
  cep: boolean = false
  address: boolean = true
  buscador: string = "CEP"


  switch(): void{
    this.cep = !this.cep
    this.address = !this.address
    if (this.cep){
      this.buscador = 'endereço'
    } else{
      this.buscador = "CEP"
    }
  }

  setBuscador(){
    if(this.cep){
      this.buscador = "CEP"
    }
  }
  
}
