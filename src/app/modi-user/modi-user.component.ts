import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-modi-user',
  templateUrl: './modi-user.component.html',
  styleUrls: ['./modi-user.component.scss']
})
export class ModiUserComponent implements OnInit {
  users;
 query;
 isActive:boolean;

  constructor(private userService:UserService) { }

  ngOnInit() {
    //je recuppere tout les users
    this.userService.getAll()
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
  getIsActive(user){
    let active=user.isActive;
    if(active == "true"){
      return  "Déactivé";
    }else{
      return  "Activé";
    }

  }

}
