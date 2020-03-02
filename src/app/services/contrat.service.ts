import { Injectable } from '@angular/core';
import { PdfMakeWrapper } from 'pdfmake-wrapper';

@Injectable({
  providedIn: 'root'
})
export class ContratService {

  constructor() { }
  generateContratPdf(c){
    const pdf = new PdfMakeWrapper();
    pdf.add(c["Termes"]);
    pdf.create().open();

  }
}
