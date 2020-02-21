import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder ,Validators} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  error:string;



  constructor(private ndm:Router, private auth:AuthService , private formBuilder:FormBuilder ) { }

  ngOnInit() {
    this.loginForm  =  this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });
  
  }
  //Pour recupperer les champs facilement
  get f() { return this.loginForm.controls; }


  onSubmit(){


  this.auth.login(this.f.username.value,this.f.password.value)
   .subscribe(
     data=>{
       localStorage.setItem("token",data.token);
      this.ndm.navigateByUrl("/menu");

     },
     error=>{

      this.error=error.error.message;

     }
   );
  }
  



}
