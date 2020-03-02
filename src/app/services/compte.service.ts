import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  constructor(private httpClient:HttpClient) { }

  create(compte){
    return this.httpClient.post<any>(`http://127.0.0.1:8000/api/comptes`, compte);
  }
  login(username:string,password:string){
    return this.httpClient.post<any>(`http://127.0.0.1:8000/api/login_check`, { username, password })


  }
}
