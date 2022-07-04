import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import ObjectToJson from 'src/utils/objectToJson';

@Component({
  selector: 'app-cep-search',
  templateUrl: './cep-search.component.html',
  styleUrls: ['./cep-search.component.css']
})
export class CepSearchComponent implements OnInit {
  data = '';
  empty = true

  logradouro!: string
  municipio!: string
  estado!: string

  receivedData = [{
    cep: "",
    logradouro: "",
    complemento: "",
    bairro: "",
    localidade: "",
    uf: "",
    ibge: "",
    gia: "",
    ddd: "",
    siafi: ""
  }]

  constructor(private http: HttpClient) { }

  keyCity(event: any) { // without type info
    this.municipio = event.target.value
    console.log(this.municipio)
  }

  keyStreet(event: any) {
    this.logradouro = event.target.value
    console.log(this.logradouro)
  }

  selectState(event: any) {
    this.estado = event.target.value
  }

  getAddress() {

    this.http.get(`http://localhost:8080/address/${this.estado}/${this.municipio}/${this.logradouro}`).subscribe(result => {
      const data = ObjectToJson(result)

      this.receivedData = data
      this.empty = false
    })
  }


  ngOnInit(): void {
  }

}
