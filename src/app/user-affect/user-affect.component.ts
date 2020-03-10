import { Component, OnInit, SimpleChanges } from '@angular/core';
import { UserService } from '../services/user.service';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-affect',
  templateUrl: './user-affect.component.html',
  styleUrls: ['./user-affect.component.scss']
})
export class UserAffectComponent implements OnInit {
  users;
  query;
  isActive;
  username;
  fin;
  debut;
  

  constructor(private userService:UserService,private router:Router) { }

  ngOnInit() {
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
  
  affecter(p){
    localStorage.setItem('user','/api/users/'+p);
    console.log(localStorage.getItem("user"));
    this.router.navigate(['time']);
  }
 
}
 