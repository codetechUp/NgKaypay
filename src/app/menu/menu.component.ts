import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
    prenom:string;
  thumbnail;
  nom:string;

  constructor(private auth:AuthService, private sanitizer: DomSanitizer) {
   
   }

  ngOnInit() {
    this.auth.getCurrentUser()
    .subscribe(
      data=>{
        console.log(data);
       let objectURL = 'data:image/jpeg;base64,' + data.image;

       this.thumbnail = this.sanitizer.bypassSecurityTrustUrl(objectURL);
       this.prenom=data.nom;
       this.nom=data.prenom;


      },
      error=>{
        console.log(error);

      }
    )
  }
  
}
