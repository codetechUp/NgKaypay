import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { DomSanitizer } from '@angular/platform-browser';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
    prenom:string;
  thumbnail;
  nom:string;

  constructor(private auth:AuthService,private UserService:UserService) {
   
   }

  ngOnInit() {
    this.auth.getCurrentUser()
    .subscribe(
      data=>{
        //recupperation de l'image
        this.thumbnail=this.UserService.getThumbnail(data);
       
       this.prenom=data.nom;
       this.nom=data.prenom;


      },
      error=>{
        console.log(error);

      }
    )
  }
  
}
