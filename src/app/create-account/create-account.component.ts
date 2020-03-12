import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CompteService } from '../services/compte.service';
import { ContratService } from '../services/contrat.service';
import * as jsPDF from 'jspdf'
import { identifierModuleUrl } from '@angular/compiler';
import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {
form:FormGroup;
public loading = false;
i;
iri:string;
ninea;
prenom:string="";
nom:string="";
username:string="";
email:string="";
password:string="";
rc:string="";
  constructor(private router:Router, private compteService:CompteService,private contrat:ContratService,private flash:FlashMessagesService) { }

  ngOnInit() {
    this.i=0;
   this.form = new FormGroup({
      partenaire: new FormGroup({
        rc: new FormControl(''),
        ninea: new FormControl(''),
        users: new FormGroup({
          username: new FormControl(''),
          password: new FormControl(''),
          prenom: new FormControl(''),
          nom: new FormControl(''),
          email: new FormControl('')
        })
      }),
      depots:new FormGroup({
        montant: new FormControl('')
      })
      
    });
    this.onChanges();
  }
  onChanges(): void {
    this.form.get('partenaire.ninea').valueChanges.subscribe(val => {
      if(val){
        this.getPatnerByNinea(val);
      }
      
    
    });
  }
  get f() { return this.form.controls; }
  create(){
  
   let partenaire= this.form.value.partenaire;
   
   let rca= partenaire.rc;
   let nineaa=partenaire.ninea;
   let usersa=partenaire.users;
   let montanta=this.form.value.depots.montant;
   console.log(usersa);

   let compteNP={
    partenaire:{
      rc:rca,
      ninea:nineaa,
      users:[
        usersa
      ]
    
    },
    depots:[{
      montant:montanta
    }]
  };
  let comptePE={
    partenaire:this.iri,
    depots:[{
      montant:montanta
    }]
  };
if(this.i!=1){
  this.loading=true;
  this.compteService.create(compteNP).subscribe(
    data=>{
      var lMargin=15; //left margin in mm
 var rMargin=15; //right margin in mm
 var pdfInMM=210;  // width of A4 in mm
 var pageCenter=pdfInMM/2;
 var doc = new jsPDF("p","mm","a4");   

 var lines =doc.splitTextToSize(data, (pdfInMM-lMargin-rMargin));
 doc.text(lines,pageCenter,20,'center'); //see this line
 doc.save('Generated.pdf');
 this.router.navigate(["dash"]);
      console.log(data);
      this.flash.show("Compte crée avec success", { timeout: 3000 ,cssClass: 'alert-success'});
      this.loading=false;
    } 
     
    
  )}
else{
  this.loading=true;
  this.compteService.create(comptePE).subscribe(
    data=>{
      this.router.navigate(["dash"]);
      console.log(data);
      this.flash.show("Compte crée avec success", { timeout: 3000 ,cssClass: 'alert-success'});
      this.loading=false;
    })

}
   

  }











  getPatnerByNinea(ninea){
    this.compteService.searchByNinea(ninea).subscribe
    (data=>{
      if(data["hydra:member"][0]){
        let partner=data["hydra:member"][0].partenaire ;
        this.iri =partner['@id'];
        console.log(data["hydra:member"][0]);
        let user=data["hydra:member"][0].partenaire.users[0];
        this.prenom=user.prenom;
        this.nom=user.nom;
        this.email=user.email;
        this.username=user.username;
        this.password=user.password;
        this.rc=partner.rc;

        this.form.get("partenaire.users").disable();
        this.form.get("partenaire.rc").disable();
        this.i=1;
        
      }else{
        this.prenom=""
        this.nom="";
        this.email="";
        this.username="";
        this.password="";
        this.rc="";

        this.form.get("partenaire.users").enable();
        this.form.get("partenaire.rc").enable();
      }
     

    },
    error=>{
      console.log(error);
      console.log()
      

    })
  }
}
