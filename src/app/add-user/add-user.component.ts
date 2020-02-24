import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { RoleService } from '../services/role.service';
import { filter ,map} from 'rxjs/operators';


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

  constructor(private roles:RoleService,private formBuilder:FormBuilder,private UserService:UserService) { }

  ngOnInit() {
    //Au chargement de la Je recuppere les roles
    this.role =this.roles.getRoles().pipe(map((array) => array.filter(role => role.libelle != "ROLE_ADMIN_SYST"))).subscribe(
      data=>{
        console.log(data);
        this.role=data;
      }
    );
    
    
    




    this.registerForm=this.formBuilder.group({
      password: ['', Validators.required],
      email:['', Validators.required],
      role:['', Validators.required],
      prenom:['', Validators.required],
      nom:['', Validators.required],
      username : ['', Validators.required]
  });
  }
  //Pour recupperer les champs facilement
  get f() { return this.registerForm.controls; }
  onSubmit()
  {
    //Je change la valeur de id role en iri c-a-d ∕api∕roles/{id}
    this.f.role.setValue(`${this.iri}${this.f.role.value}`);

    //Je creer le nouveau utilisateur
      this.UserService.register(this.registerForm.value)
      .subscribe(
        data=>{
          console.log(data);
  
        },
        error=>{
          console.log(error);
  
        }
      )
    }
  

 

}
