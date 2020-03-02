import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder ,Validators} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import {  FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  error:string;



  constructor(private flash:FlashMessagesService,private ndm:Router, private auth:AuthService , private formBuilder:FormBuilder ) { }

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
       console.log(this.f.username.value);
       localStorage.setItem("token",data.token);
       localStorage.setItem("auth","1");
      this.ndm.navigateByUrl("/dash");
      this.flash.show('vous etes Connecté!', { cssClass: 'alert-success', timeout: 3000 });

     },
     error=>{

      this.error=error.error.message;

     }
   );
  }
  



}
