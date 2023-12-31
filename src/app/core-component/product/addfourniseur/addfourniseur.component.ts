import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AppService } from 'src/app/app.service';
import { routes } from 'src/app/core/helpers/routes';
interface data {
  value: string;
}

@Component({
  selector: 'app-addfourniseur',
  templateUrl: './addfourniseur.component.html',
  styleUrls: ['./addfourniseur.component.scss']
})
export class AddfourniseurComponent {
  public routes = routes;
  public selectedValue1 = '';
  public selectedValue2 = '';
  public selectedValue3 = '';
  public selectedValue4 = '';
  public selectedValue5 = '';
  public selectedValue6 = '';
  public selectedValue7 = '';
  image: any;
  Adresse: any;
  Email: any;
  Telephone: any;
  Fax: any;
  MatriculFiscal: any;
  Description: any;
  Contact: any;
  RaisonSocial: any;
  constructor(private appService: AppService, private router: Router, private toastr: ToastrService) { }

  submit() {
    // Implement the submit logic here, e.g., calling a login service

    this.appService.addFourniseur(this.Adresse, this.Email, this.Telephone, this.Fax, this.MatriculFiscal, this.Description, this.Contact, this.RaisonSocial)
      .subscribe(response => {
        console.log(response)
        if (response.success) {
          this.toastr.success('Have fun storming the castle!', 'Toastr fun!', {
            timeOut: 1000,
            progressBar: true,
            progressAnimation: 'increasing',
            positionClass: 'toast-top-right'
          });
          this.router.navigate(['/product/fournisseurs']);


        } else {
          alert(response.error_message)
        }
      }
      );


  }


}
