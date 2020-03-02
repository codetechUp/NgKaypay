import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CompteService } from '../services/compte.service';
import { ContratService } from '../services/contrat.service';
import * as jsPDF from 'jspdf'
@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {
form:FormGroup;
i;
  constructor( private compteService:CompteService,private contrat:ContratService) { }

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
  }
  get f() { return this.form.controls; }
  create(){
  
   let partenaire= this.form.value.partenaire;
   
   let rca= partenaire.rc;
   let nineaa=partenaire.ninea;
   let usersa=partenaire.users;
   let montanta=this.form.value.depots.montant;
   console.log(usersa);

    this.compteService.create({
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
    }).subscribe(
      data=>{
        var lMargin=15; //left margin in mm
   var rMargin=15; //right margin in mm
   var pdfInMM=210;  // width of A4 in mm
   var pageCenter=pdfInMM/2;
   var doc = new jsPDF("p","mm","a4");   
   var lines =doc.splitTextToSize(data, (pdfInMM-lMargin-rMargin));
   doc.text(lines,pageCenter,20,'center'); //see this line
   doc.save('Generated.pdf');
       
          
       
      },
      error=>{
        console.log(error)
      }
    )

  }
}
