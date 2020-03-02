import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.models';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient, private sanitizer: DomSanitizer) { }


  register(user){
    return this.httpClient.post<User>(`http://127.0.0.1:8000/api/users`,user);

  }
  upload(image,id){
    let headers = new HttpHeaders(); 
    //headers = headers.set('Content-Type', 'multipart/form-data');
   // headers = headers.set('Accept', 'application/json');
    return this.httpClient.post<User>(`http://127.0.0.1:8000/api/users/image/${id}`,image);

  }
  modiUser(user,id){
    return this.httpClient.put<any>(`http://127.0.0.1:8000/api/users/${id}`,user);
  }
  getAll(){
    return this.httpClient.get<any>(`http://127.0.0.1:8000/api/users.json`);
  }
  getThumbnail(data){
    if(data.image ){
      var objectURL = 'data:image/jpeg;base64,' + data.image;
    }else{
      var objectURL ="./assets/images/image.png";

    }
    
    return this.sanitizer.bypassSecurityTrustUrl(objectURL);

  }
  bloquer(id,status){
   
    return this.httpClient.put<any>(`http://127.0.0.1:8000/api/users/${id}`,{ "isActive": status});


  }
  getUserById(id){
    return this.httpClient.get<User>(`http://127.0.0.1:8000/api/users/${id}.json`)
  }
}
