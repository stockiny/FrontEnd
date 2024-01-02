import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AppService } from 'src/app/app.service';
import { routes } from 'src/app/core/helpers/routes';

@Component({
  selector: 'app-add-serie',
  templateUrl: './add-serie.component.html',
  styleUrls: ['./add-serie.component.scss']
})
export class AddSerieComponent {
  reference:any=""; 
  libelle:any=""; 
  public routes = routes;
  constructor(private router:Router,private appService:AppService,private toastr: ToastrService) { }

   
  submit(){
 
     this.appService.addSerie(this.reference,this.libelle)
 .subscribe(response => {
   console.log(response)
  if(response.success){
    this.toastr.success('Serie ajoutée avec succées', 'Ajout succées', {
      timeOut:1000,
      progressBar:true,
      progressAnimation:'increasing',
      positionClass:'toast-top-right'
    });
   this.router.navigate(['/product/serie-list']);
  

  }else{
   alert(response.error_message)
  }
 }
 );
     

  }
 
}
