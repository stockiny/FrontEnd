import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AppService } from 'src/app/app.service';
import { routes } from 'src/app/core/helpers/routes';

@Component({
  selector: 'app-addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.scss']
})
export class AddclientComponent {

  nom: any = "";
  prenom: any = "";
  adresse: any = "";
  cin: any = "";
  delvirele: Date;
  telephone: any = "";
  email: any = "";

  public routes = routes;

  constructor(private router: Router, private appService: AppService, private toastr: ToastrService) { }

  submit() {
    this.appService.addClient(
     this.nom,
     this.prenom,
      this.adresse,
      this.cin,
       this.delvirele,
      this.telephone,
       this.email
    ).subscribe(response => {
      console.log(response);
      if (response.success) {
        this.toastr.success('Client ajouté avec succès!', 'Succès', {
          timeOut: 1000,
          progressBar: true,
          progressAnimation: 'increasing',
          positionClass: 'toast-top-right'
        });
        this.router.navigate(['/product/clients']);
      } else {
        alert(response.error_message);
      }
    });
}
}
