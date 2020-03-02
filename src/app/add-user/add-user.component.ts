import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators, FormControl } from '@angular/forms';
import { UserService } from '../services/user.service';
import { RoleService } from '../services/role.service';
import { filter ,map} from 'rxjs/operators';
import { User } from '../models/user.models';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  //Declaration du form
  registerForm:FormGroup;
  role;
  iri=`/api/roles/`;

  constructor(private roles:RoleService,private router:Router,private UserService:UserService) { }

  ngOnInit() {
    //Au chargement de la Je recuppere les roles
    this.role =this.roles.getRoles().pipe(map((array) => array.filter(role => role.libelle != "ROLE_ADMIN_SYST"))).subscribe(
      data=>{
        console.log(data);
        this.role=data;
      }
    );
    this.registerForm = new FormGroup({
      prenom: new FormControl(''),
      nom: new FormControl(''),
      username: new FormControl(''),
      password: new FormControl(''),
      email: new FormControl(''),
      role: new FormControl(''),
    });
  }
  //Pour recupperer les champs facilement
  get f() { return this.registerForm.controls; }
  createUser()
  {
    //Je change la valeur de id role en iri c-a-d ∕api∕roles/{id}
    console.log(this.registerForm.value.role);
    this.registerForm.value.role=`${this.iri}${this.f.role.value}`;

    //Je creer le nouveau utilisateur
      this.UserService.register(this.registerForm.value)
      .subscribe(
        data=>{
          console.log(data);
          this.router.navigateByUrl("modiuser");
        },
        error=>{
          console.log(error);
  
        }
      )
    }
  

 

}
