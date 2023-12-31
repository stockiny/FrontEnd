import { Component } from '@angular/core';
import { routes } from 'src/app/core/helpers/routes';
import { Validators, FormBuilder } from '@angular/forms';
import { AppService } from 'src/app/app.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import * as math from 'mathjs';

interface Devis {
  model: any;
  qte: 1
  couleur: any;
  vitre: any;
  indication: any;
  L: number;
  H: number;
  D1: any;
  D2: any;
  D3: any;
  D4: any;
  D5: any;
  D6: any;
  D7: any;
  D8: any;
  D9: any;
  couvre_joint_droite: true,
  couvre_joint_gauche: true,
  couvre_joint_haut: true,
  couvre_joint_bas: true,
  prix_un_ht: any;
  fodec: any;
  tva: any;
  remise: any;
  totale: any;
  mps?:[{}];



}
@Component({
  selector: 'app-detail-devis',
  templateUrl: './detail-devis.component.html',
  styleUrls: ['./detail-devis.component.scss']
})
export class DetailDevisComponent {
  reference:any;

  selectedModel = ""
  filtredModel = [];
  selectedModels = [];
  couleurs: any;
  vitres: any;
  selectedVitre = ""
  selectedCouleur = ""
  allModels :any;
  tht:number=0.00;
  tr:any=0.00;
  totalht:any=0.00;
  fodec:any=0.00;
  totaltva:any=0.00;
  totalttc:any=0.00;
  mps?= [];
  id:any;

  constructor(private _formBuilder: FormBuilder, private appService: AppService,private route: ActivatedRoute) {
    this.appService.getCouleurs().subscribe(res => {
      this.couleurs = res.couleurs;
      console.log(this.couleurs)
    })

  }

  ngOnInit(): void {
    this.appService.getModels()
    .subscribe(response => {
  
      this.allModels=response;
      
    }
    );
    this.appService.getArticleByType('VITRAGES')
    .subscribe(response => {
  
      this.vitres=response.materiel;
      
    }
    );
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    

  }
  onModelChange() {
    const inputName = this.selectedModel

    // Filter drivers based on input  
    const filtered = this.allModels.filter(
      (input) =>
        input.Designation.includes(
          inputName
        ) ||
        input.Reference.includes(inputName)
    );

    // Update the filtered list
    this.filtredModel = filtered;

  }
  handleSelectionModel(item) {
    const a: Devis = {

      model: item,
      couleur: "",
      qte: 1,
      vitre: null,
      indication: "",
      L: 0,
      H: 0,
      D1: "",
      D2: "",
      D3: "",
      D4: "",
      D5: "",
      D6: "",
      D7: "",
      D8: "",
      D9: "",
      couvre_joint_droite: true,
      couvre_joint_gauche: true,
      couvre_joint_haut: true,
      couvre_joint_bas: true,
      prix_un_ht: "",
      fodec: 0,
      tva: 0,
      remise: 0,
      totale: 0,
      mps:[{}]

    }
    this.selectedModels.push(a);
    console.log(this.selectedModels)

    // Update the formik values


    // Clear the filtered list
    this.filtredModel = [];
    this.selectedModel = "";

  }

  Submit(){
    console.log(this.selectedModels)
  }

  

  calcul(i){
    
   if(!this.selectedModels[i].L || !this.selectedModels[i].H){
    return;
   }
   
   console.log(i)
  }

  Optimisation(){
    this.mps=[];
    var prixTotal=0;
    for (const item of this.selectedModels) {
      const profiles = item.model.Profiles;
      
      var prix= 0;
      for (const profil of profiles) {
        var qteP=0;
        const equation = profil.debitage.replace(/L/g, item.L.toString()).replace(/H/g, item.H.toString());


        qteP+=math.evaluate(equation)*item.qte*parseInt(profil.qte);
        let result;

switch (item.couleur) {
  case 'Noir':
    result = profil.mp.PrixVenteTTCNoir/6500; // Set the result to the value for 'noir'
    break;
  
  case 'Blanc':
    result = profil.mp.PrixVenteTTCBlanc/6500; // Set the result to the value for 'blanc'
    break;
    case 'Gris':
      result = profil.mp.PrixVenteTTCGris/6500; // Set the result to the value for 'blanc'
      break;
      case 'Autres':
        result = profil.mp.PrixVenteTTCAutres/6500; // Set the result to the value for 'blanc'
    break;
  default:
    // Handle the case where colorVariable doesn't match 'noir' or 'blanc'
    break;
}

const mp: any = {
  _id:profil.mp._id,
  qtett:qteP,
  prixu:result,
  prixtt:qteP*result
}

        let index=profiles.indexOf(profil);
        this.mps.push(mp);
     

        prix+=qteP*result;

        

      }

      const accessoires = item.model.Accessoires;
      for (const accessoire of accessoires) {
        var qteA=0;
        let result;
        qteA=parseInt(accessoire.qte);

switch (item.couleur) {
  case 'Noir':
    result = accessoire.mp.PrixVenteTTCNoir; // Set the result to the value for 'noir'
    break;
  
  case 'Blanc':
    result = accessoire.mp.PrixVenteTTCBlanc; // Set the result to the value for 'blanc'
    break;
    case 'Gris':
      result = accessoire.mp.PrixVenteTTCGris; // Set the result to the value for 'blanc'
      break;
      case 'Autres':
        result = accessoire.mp.PrixVenteTTCAutres; // Set the result to the value for 'blanc'
    break;
  default:
    // Handle the case where colorVariable doesn't match 'noir' or 'blanc'
    break;
}

const mp: any = {
  _id:accessoire.mp._id,
  qtett:qteA,
  prixu:result,
  prixtt:qteA*result
}
this.mps.push(mp);
        prix+=qteA*result;

      }

      const autres = item.model.Autres;
      for (const autre of autres) {

        var qteAU=0;
    var qteL=0;
    var qteH=0;
    var prixUAU=0;
        const equationL = autre.longeur.replace(/L/g, item.L.toString()).replace(/D1/g, item.D1.toString()).replace(/D2/g, item.D2.toString()).replace(/D3/g, item.D3.toString()).replace(/D4/g, item.D4.toString())
        .replace(/D5/g, item.D5.toString()).replace(/D6/g, item.D6.toString()).replace(/D7/g, item.D7.toString()).replace(/D8/g, item.D8.toString()).replace(/D9/g, item.D9.toString());;
        qteL=math.evaluate(equationL);
        const equationH = autre.hauteur.replace(/H/g, item.H.toString())
        .replace(/D1/g, item.D1.toString()).replace(/D2/g, item.D2.toString()).replace(/D3/g, item.D3.toString()).replace(/D4/g, item.D4.toString())
        .replace(/D5/g, item.D5.toString()).replace(/D6/g, item.D6.toString()).replace(/D7/g, item.D7.toString()).replace(/D8/g, item.D8.toString()).replace(/D9/g, item.D9.toString());
        qteH=math.evaluate(equationH);
        qteAU=(qteL/1000)*(qteH/1000)*parseInt(autre.qte)*item.qte;
        prixUAU=autre.mp.PrixVenteTTC;
        prix+=qteAU*prixUAU;
        const mp: any = {
          _id:autre.mp._id,
          qtett:qteAU,
          prixu:prixUAU,
          prixtt:qteAU*prixUAU
        }
        this.mps.push(mp);
      }
      const joints = item.model.Joints;
      for (const joint of joints) {
        var qteJ=0;
        var qteL=0;
        var qteH=0;
        var prixUJ=0;

        const equationL = joint.longeur.replace(/L/g, item.L.toString());
        qteL=math.evaluate(equationL);
        const equationH = joint.hauteur.replace(/H/g, item.H.toString()).replace(/D1/g, item.D1.toString());
        qteH=math.evaluate(equationH);

        qteJ=(qteL/1000)+(qteH/1000)*parseInt(joint.qte)*item.qte;
        prixUJ=joint.mp.PrixVenteTTC;
        prix+=qteJ*prixUJ;
        const mp: any = {
          _id:joint.mp._id,
          qtett:qteJ,
          prixu:prixUJ,
          prixtt:qteJ*prixUJ
        }
        this.mps.push(mp); 



      }


      console.log(prix);

    var qteV=0;
    var qteL=0;
    var qteH=0;
    var prixUV=0;
        const equationL = item.model.Vitrage[0].longeur.replace(/L/g, item.L.toString());
        qteL=math.evaluate(equationL);
        const equationH = item.model.Vitrage[0].hauteur.replace(/H/g, item.H.toString());
        qteH=math.evaluate(equationH);
        qteV=(qteL/1000)*(qteH/1000)*parseInt(item.model.Vitrage[0].qte);
        prixUV=item.vitre.PrixVenteTTC;
        prix+=qteV*prixUV;
        const mp: any = {
          _id:item.vitre._id,
          qtett:qteV,
          prixu:prixUV,
          prixtt:qteV*prixUV
        }
        this.mps.push(mp);
      item.totale=prix;
      prixTotal+=prix;


      // Now 'profiles' contains the list of profiles for the current array item
      
      // You can perform further actions with the profiles array here
    }


    console.log(prixTotal)
    this.tht=prixTotal;
    this.totalht=prixTotal;
    this.fodec=this.totalht*this.selectedModels[0].fodec/100;
    this.totaltva=this.totalht*this.selectedModels[0].tva/100;
    this.totalttc=this.totalht+this.totaltva+this.fodec;

    const devisFinal: any = {
      Reference:this.reference,
      Models:this.selectedModels,
      THT:this.tht,
      TR: this.tr,
    THTAvecR: this.totalht,
    FODEC: this.fodec,
    TAvecTVA: this.totaltva,
    TotalTTC: this.totalttc,
    }

console.log(devisFinal)
   
this.appService.addDevis(devisFinal).subscribe(
  res => {
    console.log(res);
  }
)
    
  }

  ht1Fodec(){

    this.totalht=this.tht-(this.tht*this.tr/100);
    this.fodec=this.totalht*this.selectedModels[0].fodec/100;
    this.totaltva=this.totalht*this.selectedModels[0].tva/100;
    this.totalttc=this.totalht+this.totaltva+this.fodec;

  }




}