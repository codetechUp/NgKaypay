import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.models';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }


  register(user){
    return this.httpClient.post<User>(`http://127.0.0.1:8000/api/users`,user);

  }
  getAll(){
    return this.httpClient.get<any>(`http://127.0.0.1:8000/api/users.json`);
  }
}
