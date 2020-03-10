import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { CompteService } from '../services/compte.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-affect',
  templateUrl: './affect.component.html',
  styleUrls: ['./affect.component.scss']
})
export class AffectComponent implements OnInit {
comptes;
 
  constructor(private compteService:CompteService,private router : Router) {}

  ngOnInit() {
    this.compteService.getCompte().subscribe(
      data=> {
        
        this.comptes=data["hydra:member"]
       console.log(data);
      }
    )
    
  }

  affecterC(c){
   let id=c['@id']
    localStorage.setItem('compte',id);
    console.log(localStorage.getItem("compte"));
    this.router.navigate(['userAffect']);
  }
  
}



