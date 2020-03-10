import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  constructor(private httpClient:HttpClient) { }

  create(compte){
    return this.httpClient.post<any>(`${environment.url}/api/comptes`, compte);
  }
  searchByNinea(ninea){
    return this.httpClient.get<any>(`${environment.url}/api/comptes?partenaire.ninea=${ninea}`)
  }
  getCompte(){
    return this.httpClient.get<any>(`${environment.url}/api/comptes/partenaire`);
  }
}
