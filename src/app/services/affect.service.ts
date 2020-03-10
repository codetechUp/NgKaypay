import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AffectService {

  constructor(private httpClient:HttpClient) { }



  affecter(affectation){
    return this.httpClient.post<any>(`${environment.url}/api/affectations`, affectation);
  }
}
