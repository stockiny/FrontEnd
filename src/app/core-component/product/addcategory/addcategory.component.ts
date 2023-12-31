import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AppService } from 'src/app/app.service';
import { routes } from 'src/app/core/helpers/routes';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.scss']
})
export class AddcategoryComponent {
  description:any ="";
  libelle:any="";
  public routes = routes;
  constructor(private router:Router,private appService:AppService,private toastr: ToastrService) { }

   
  submit(){
     // Implement the submit logic here, e.g., calling a login service
 
     this.appService.addCategory(this.description,this.libelle)
 .subscribe(response => {
   console.log(response)
  if(response.success){
    this.toastr.success('Have fun storming the castle!', 'Toastr fun!', {
      timeOut:1000,
      progressBar:true,
      progressAnimation:'increasing',
      positionClass:'toast-top-right'
    });
   this.router.navigate(['/product/category-list']);
  

  }else{
   alert(response.error_message)
  }
 }
 );
     

  }
 

}
