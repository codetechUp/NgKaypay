import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../services/user.service';
import {map} from 'rxjs/operators'
import { Router } from '@angular/router';
import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';
import { RoleService } from '../services/role.service';

@Component({
  selector: 'app-modi-user',
  templateUrl: './modi-user.component.html',
  styleUrls: ['./modi-user.component.scss']
})
export class ModiUserComponent implements OnInit {
  users;
 query;
 isActive:boolean=true;
 username;
 @Input() a=2;

  constructor(private userService:UserService,private router :Router,private flash:FlashMessagesService,private role:RoleService) { }

  ngOnInit() {
    //je recuppere tout les users
    this.username=localStorage.getItem("username");
    console.log(this.username);
    
    this.userService.getAll().pipe(map(user=>user.filter(user=>user.username!=this.username )))
    .subscribe(
      data => {
        console.log(data);
        this.users = data;
      },
      error => {
        console.log(error);
      }
      
    )

  }
  //Fonction permet de recupperer l'image à partir d'un USER
  getImage(user){
    return this.userService.getThumbnail(user);
  }
  change(id,status){
    this.userService.bloquer(id,status)
    .subscribe(
      data=>{
        this.getIsActive(data);
        console.log(data);
        this.flash.show("vous avez modifié le status de l'utilisateur", { timeout: 2000 ,cssClass: 'alert-success'});
       
        
       

      }
    )
  }
  getIsActive(user){
    let active=user.isActive;
    this.isActive=user.isActive;
    if(active === true){
      return  "Déactivé";
    }else{
      return  "Activé";
    }

  }
  getRoleFor(roles){
    
    return roles["0"];
  }

}
