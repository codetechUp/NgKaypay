import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
  getAll(){
    return this.httpClient.get<any>(`http://127.0.0.1:8000/api/users.json`);
  }
  getThumbnail(data){
    if(data.image){
      var objectURL = 'data:image/jpeg;base64,' + data.image;
    }else{
      var objectURL ="./assets/images/image.png";

    }

    return this.sanitizer.bypassSecurityTrustUrl(objectURL);

  }
}
