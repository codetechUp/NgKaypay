import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user.models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-modi-user',
  templateUrl: './modi-user.component.html',
  styleUrls: ['./modi-user.component.scss']
})
export class ModiUserComponent implements OnInit {
  users;

  constructor(private userService:UserService) { }

  ngOnInit() {
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

}
