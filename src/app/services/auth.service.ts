import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from "@auth0/angular-jwt";
import { User } from '../models/user.models';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
idUser:number;
role;
  constructor(private httpClient:HttpClient) { }


  login(username:string,password:string){
    return this.httpClient.post<any>(`${environment.url}/api/login_check`, { username, password })


  }
  getToken(){
    return localStorage.getItem("token");
  }
  getCurrentUser(){
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(this.getToken());
    this.idUser=decodedToken.id
    
    return this.httpClient.get<User>(`${environment.url}/api/users/${this.idUser}.json`)

  }
  getRole(){
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(this.getToken());
    this.role=decodedToken.roles["0"];
    return this.role;
    
  }
  logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("auth");
  }
}
