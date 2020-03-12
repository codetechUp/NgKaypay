import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CompteService } from '../services/compte.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-depot',
  templateUrl: './depot.component.html',
  styleUrls: ['./depot.component.scss']
})
export class DepotComponent implements OnInit {
depotForm:FormGroup;
numero;
montant;
iri;
  constructor(private compte : CompteService,private router:Router,private flash:FlashMessagesService) { }

  ngOnInit() {
    this.depotForm=new FormGroup({
      compte : new FormControl(''),
      montant : new FormControl('')
    })
    this.onChanges();
  }


  onChanges(): void {
    this.depotForm.get('compte').valueChanges.subscribe(val => {
      this.getCompteByNum(val);
    
    });
  }

  getCompteByNum(val){
    this.compte.searchByNumero(val).subscribe(
      
        data =>{
          console.log(data);
          if(data["hydra:member"][0]){
            let comptes=data["hydra:member"][0] ;
            this.iri =comptes['@id'];
            this.depotForm.get("montant").enable();
          }else{
            this.numero=""
            this.montant="";
            this.depotForm.get("montant").disable();
          }
        }
        
        
       
      
    )
  }

  
  create(){
    console.log(this.iri);
    this.depotForm.value.compte=this.iri;                                 
    this.compte.faireDepot(this.depotForm.value).subscribe(
      data=>{
        this.flash.show("depot effectuer avec success", { timeout: 7000 ,cssClass: 'alert-success'});
        this.router.navigateByUrl("/dash");
      }
    )
  }


}
