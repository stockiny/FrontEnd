import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AppService } from 'src/app/app.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-editbrand',
  templateUrl: './editbrand.component.html',
  styleUrls: ['./editbrand.component.scss']
})
export class EditbrandComponent {

  show=false
  id: string;
  reference:any=""; 
  libelle:any=""; 
  image:any;
  imagePreview: string | ArrayBuffer | null = null;

  constructor(private route: ActivatedRoute,private router:Router,private appService:AppService,private toastr: ToastrService) {
    this.route.params.subscribe(params => {
      this.id = params['id']; // Access the 'id' parameter from the route
    });
   }

  ngOnInit(): void {
    this.appService.getMarqueById(this.id)
    .subscribe(response => {
  
      this.reference="00"+response.marque.Reference;
      this.libelle=response.marque.Libelle;
      this.image=environment.backendUrl+"/"+response.marque.Photo;

    }
    );
  }

  onCancel(){
  //this.show = !this.show;
  this.imagePreview=null;
  this.image=null;
   this.show = !this.show;
  }
  onFileSelected(event: any) {
    this.image = event.target.files[0];
    this.previewImage();
    this.show ? this.show= false :this.show=false;
    console.log(this.image)
  }
  previewImage() {
    if (this.image) {
      const reader = new FileReader();

      reader.onload = (event: any) => {
        this.imagePreview = event.target.result;
        console.log()
      };

      reader.readAsDataURL(this.image);
    } else {
      this.imagePreview = null;
    }
  }

  submit(){

    const formData  = new FormData();
    
    formData.append('Reference',this.reference);
    formData.append('Libelle',this.libelle);
    formData.append('photo',this.image);
   
       // Implement the submit logic here, e.g., calling a login service
   console.log(formData)
   
  
       this.appService.editMarque(this.id,formData)
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
}
