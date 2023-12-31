import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AppService } from 'src/app/app.service';
import { routes } from 'src/app/core/helpers/routes';

@Component({
  selector: 'app-addbrand',
  templateUrl: './addbrand.component.html',
  styleUrls: ['./addbrand.component.scss']
})
export class AddbrandComponent {
  public routes = routes;
  reference:any=""; 
  libelle:any=""; 
  image:any;

  constructor(private router:Router,private appService:AppService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.appService.getMarques()
    .subscribe(response => {
  
     const total= response.marques.length+1;


    this.reference="00"+total
    }
    );
  }

 submit(){

  const formData  = new FormData();
  
  formData.append('Reference',this.reference);
  formData.append('Libelle',this.libelle);
  formData.append('photo',this.image);
 
     // Implement the submit logic here, e.g., calling a login service
 console.log(formData)
 

     this.appService.addMarque(formData)
 .subscribe(response => {
   console.log(response)
  if(response.success){
    this.toastr.success('Have fun storming the castle!', 'Toastr fun!', {
      timeOut:1000,
      progressBar:true,
      progressAnimation:'increasing',
      positionClass:'toast-top-right'
    });
   this.router.navigate(['/product/brand-list']);
  

  }else{
   alert(response.error_message)
  }
 }
 );
     

  }

  onFileSelected(event: any) {
    this.image = event.target.files[0];
    console.log(this.image)
  }

 

}
