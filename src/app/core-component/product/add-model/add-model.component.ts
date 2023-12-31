import { Component } from '@angular/core';
import { routes } from 'src/app/core/helpers/routes';
import { Validators, FormBuilder } from '@angular/forms';
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router';
interface data {
  value: string;
}


interface article {
  article: any,
  qte: any
}


@Component({
  selector: 'app-add-model',
  templateUrl: './add-model.component.html',
  styleUrls: ['./add-model.component.scss']
})
export class AddModelComponent {

  public routes = routes;
  public selectedValue = '';
  clients = [];
  nom : any;
  prenom:any;
  delvirele: Date;
  //profiles
  selectedAccesoires: Array<article> = [];
  selectedAccesoire = ""
  allAccesoires = [];
  filtredAccesoires = [];
 

  Etat: any = "";
  DateSortie: any = "";
  allArticles = [];

  //premierChamps
  Reference: any;
  Designation: any;
  selectedClient= "";
  
  theme;





  constructor(private appService: AppService , private router: Router, ) {
    this.theme = localStorage.getItem('theme');
    console.log("theme", this.theme === 'Dark');
    this.appService.getArticles().subscribe(res => {
      console.log(res)
      this.allArticles = res.articles;

    });
    this.appService.getAllClients().subscribe(res => {
      console.log(res)
      this.clients = res.clients;

    });
  
  }
 
  onAccesoireChange() {
    const inputName = this.selectedAccesoire

    // Filter drivers based on input  
    const filtered = this.allArticles.filter(
      (input) =>
        input.Designation.includes(
          inputName
        ) ||
        input.Reference.includes(inputName)
    );
    console.log(filtered);

    // Update the filtered list
    this.filtredAccesoires = filtered;

  }
  deleteAccesoire(item) {
    const index = this.selectedAccesoires.indexOf(item);
    console.log(index);
    if (index !== -1) {
      this.selectedAccesoires.splice(index, 1);
    }

  }
  handleSelectionAccesoire(i) {
    const a: article = {
      article: i,
      qte: 1

    }
    this.selectedAccesoires.push(a);

    // Update the formik values


    // Clear the filtered list
    this.filtredAccesoires = [];
    this.selectedAccesoire = "";
  }
 
  save() {
    console.log('DateSortie:', this.DateSortie);
    const body = {
      Client: this.selectedClient,
      DateSortie: this.DateSortie,
      Etat: this.Etat,
      Article: this.selectedAccesoires,
    };
    console.log(body);
    this.appService.addVente(body).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/product/list-Model']);
      }
    );
  
  }
    

  
  
  





}