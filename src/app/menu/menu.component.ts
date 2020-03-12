import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { DomSanitizer } from '@angular/platform-browser';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
    prenom:string;
  thumbnail;
  nom:string;
  username:string;
  user;
  a;
@Input() query;

  constructor(private router:Router,private auth:AuthService,private UserService:UserService) {
   
   }

  ngOnInit() {
    this.auth.getRole();



 if(localStorage.getItem("token")){
  this.auth.getCurrentUser()
  .subscribe(
    data=>{
      //recupperation de l'image
      this.thumbnail=this.UserService.getThumbnail(data);
     this.user=data;
     this.prenom=data.nom;
     this.nom=data.prenom;
     this.username=data.username;
     localStorage.setItem("username",this.username);
     


    },
    error=>{
      console.log(error);
      localStorage.removeItem("auth");

    }
  )
 }
  }
  //Fonction permet de recupperer l'image à partir d'un USER
  getImage(user){
    return this.UserService.getThumbnail(user);
  }
  logout(){
    this.auth.logout();
    localStorage.clear();
    this.router.navigateByUrl('login');
  }
  isAdmin(){
    return ( this.auth.getRole() === 'ROLE_ADMIN_SYST' || this.auth.getRole() === 'ROLE_ADMIN')? true : false;
  }
  isPAdmin(){
    return ( this.auth.getRole() === 'ROLE_PARTENAIRE' || this.auth.getRole() === 'ROLE_PADMIN')? true : false;
  }
  isCaissier(){
    return ( this.auth.getRole() === 'ROLE_CAISSIER' ) ? true : false;
  }
  isPuser(){
    return ( this.auth.getRole() === 'ROLE_PUSER' ) ? true : false;
  }
  
  
}
