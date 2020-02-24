import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Role } from '../models/role.models';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private httpClient:HttpClient) { }

  getRoles(){
   return this.httpClient.get<any>(`http://127.0.0.1:8000/api/roles.json`);
  }
}
