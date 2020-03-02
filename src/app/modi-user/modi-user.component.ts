import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../services/user.service';
import {map} from 'rxjs/operators'

@Component({
  selector: 'app-modi-user',
  templateUrl: './modi-user.component.html',
  styleUrls: ['./modi-user.component.scss']
})
export class ModiUserComponent implements OnInit {
  users;
 query;
 isActive:boolean=true;
 @Input() a=2;

  constructor(private userService:UserService) { }

  ngOnInit() {
    //je recuppere tout les users
    let username=localStorage.getItem("username");
    this.userService.getAll().pipe(map(user=>user.filter(user=>user.username!=username)))
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
      }
    )
  }
  getIsActive(user){
    let active=user.isActive;
    if(active === true){
      return  "Déactivé";
    }else{
      return  "Activé";
    }

  }

}
