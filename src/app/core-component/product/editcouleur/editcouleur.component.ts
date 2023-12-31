import { Component , OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/app.service'

@Component({
  selector: 'app-editcouleur',
  templateUrl: './editcouleur.component.html',
  styleUrls: ['./editcouleur.component.scss']
})
export class EditcouleurComponent implements OnInit {
  couleurId: string;
  couleur: any = {};

  constructor(private route: ActivatedRoute, private router: Router, private appService: AppService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.couleurId = params['id'];
      this.loadCouleur();
    });
  }

  loadCouleur() {
    this.appService.getCouleurById(this.couleurId).subscribe((data: any) => {
      this.couleur = data.couleur;
    });
  }

  submit() {
    this.appService.updateCouleur(this.couleurId, this.couleur).subscribe((data: any) => {
      if (data.success) {
        this.router.navigate(['/product/couleurlist']);
      } else {
        // Handle error, show an error message or redirect to an error page
      }
    });
  }
}
