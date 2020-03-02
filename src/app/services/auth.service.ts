import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from "@auth0/angular-jwt";
import { User } from '../models/user.models';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
idUser:number;
  constructor(private httpClient:HttpClient) { }


  login(username:string,password:string){
    return this.httpClient.post<any>(`http://127.0.0.1:8000/api/login_check`, { username, password })


  }
  getToken(){
    return localStorage.getItem("token");
  }
  getCurrentUser(){
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(this.getToken());
    this.idUser=decodedToken.id
    
    return this.httpClient.get<User>(`http://127.0.0.1:8000/api/users/${this.idUser}.json`)

  }
  logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("auth");
  }
}
