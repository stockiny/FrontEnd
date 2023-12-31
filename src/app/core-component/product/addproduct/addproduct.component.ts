import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AppService } from 'src/app/app.service';
import { routes } from 'src/app/core/helpers/routes';
interface data {
  value: string;
}
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent {
  public routes = routes;
  fournisseur: any = null;
  cat:any=""; 
  reference:any=""; 
  designation:any=""; 
  image:any;
  description:any;
  Contact:any;
  ht1:any;
  fodec:any;
  ht2:any;
  tva:any;
  ht3:any;
  marge:any=0;
  ttc:any=-1;
  constructor(private router:Router,private appService:AppService,private toastr: ToastrService) {
 
  }


  ngOnInit(): void {
    this.appService.getCategories().subscribe(res=>{
      this.description=res.categories;
      console.log(this.description)
    });
    this.appService.getFournisseurs().subscribe(res => {
      this.Contact = res.fournisseurs;
      console.log(this.Contact);
    });
  }
  Submit(){
    const formData  = new FormData();
  
    formData.append('Reference',this.reference);
    formData.append('Designation',this.designation);
    formData.append('Categorie',this.cat);
    formData.append('Fournisseur',this.fournisseur);
    formData.append('PrixAchatHT',this.ht1);
    formData.append('TauxFodec',this.fodec);
    formData.append('TauxTVA',this.tva);
    formData.append('TauxMarge',this.marge);
    formData.append('PrixAchatAvecFodec',this.ht2);
    formData.append('CoutAchatTTC',this.ht3);
    formData.append('PrixVenteTTC',this.ttc); 
    formData.append('Photo',this.image);
   
   console.log(formData)
       this.appService.addArticles(formData)
   .subscribe(response => {
     console.log(response)
    if(response.success){
      this.toastr.success('Have fun storming the castle!', 'Toastr fun!', {
        timeOut:1000,
        progressBar:true,
        progressAnimation:'increasing',
        positionClass:'toast-top-right'
      });
     this.router.navigate(['/product/product-list']);
    }else{
     alert(response.error_message)
     console.log(Error)
    }
   }
   );
    
  }

  ht1Fodec(){
 
      if(this.ht1 ){
          this.ht2=(this.ht1*(1+this.fodec/100)).toFixed(3);
        }
      if(this.tva){
          this.ht3=(this.ht2*(1+this.tva/100)).toFixed(3);
        }

        if(this.TVA){
          this.ttc = this.marge
          ? (this.ht3 * (1 + this.marge / 100)).toFixed(3)
          : this.ht3; 
        }

    }


  TVA(){
    this.ht3=this.ht2*(1+this.tva/100);
  }

  onFileSelected(event: any) {
    this.image = event.target.files[0];
    console.log(this.image)
  }
}