import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import ObjectToJson from 'src/utils/objectToJson';

@Component({
  selector: 'app-address-search',
  templateUrl: './address-search.component.html',
  styleUrls: ['./address-search.component.css']
})
export class AddressSearchComponent implements OnInit {

  data = '';
  empty = true

  logradouro!: string
  bairro!: string
  municipio!: string
  estado!: string
  ddd!: string

  constructor(private http: HttpClient) { }

  onKey(event: any) { // without type info
    this.data = event.target.value
    if (this.data.length === 0) {
      this.empty = true
    }
  }

  getCEP() {
    this.http.get(`http://localhost:8080/${this.data}`).subscribe(result => {
      const cep = ObjectToJson(result)

      this.data = cep.cep
      this.logradouro = cep.logradouro
      this.bairro = cep.bairro
      this.municipio = cep.localidade
      this.estado = cep.uf
      this.ddd = cep.ddd

      this.empty = false
    })
  }


  ngOnInit(): void {

  }

}
