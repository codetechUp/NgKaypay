import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Role } from '../models/role.models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private httpClient:HttpClient) { }

  getRoles(){
   return this.httpClient.get<any>(`${environment.url}/api/roles.json`);
  }
  getRole(iri){
    return this.httpClient.get<any>(`${environment.url}${iri}.json`);
  }
}
