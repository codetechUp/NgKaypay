import { Component, OnInit } from '@angular/core';
import { AffectService } from '../services/affect.service';
import { Compte } from '../models/compte.models';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-affect-time',
  templateUrl: './affect-time.component.html',
  styleUrls: ['./affect-time.component.scss']
})
export class AffectTimeComponent implements OnInit {
  fin;
  debut

  constructor(private affectService:AffectService,private router:Router,private flash:FlashMessagesService) { }

  ngOnInit() {
    console.log(localStorage.getItem("compte"));
    console.log(localStorage.getItem("user"));
  }
  affecter(){
   let user=localStorage.getItem("user");
   let compte=localStorage.getItem("compte");
   let affectation={
      dateFin: this.fin,
      dateDebut: this.debut,
      users:user ,
      comptes: compte
    }

    this.affectService.affecter(affectation).subscribe(
        data=>{
          console.log(data);
          this.router.navigateByUrl("/dash");
          this.flash.show("vous avez modifié le status de l'utilisateur", { timeout: 7000 ,cssClass: 'alert-success'});
        },
        error=>{
          console.log(error);
          
        }
    )
    console.log(localStorage.getItem("compte"));
    console.log(localStorage.getItem("user"));
    console.log(this.fin);
    console.log(this.debut);

    
   }
}
