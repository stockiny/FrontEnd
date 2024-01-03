import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-facturesansdecoupage',
  templateUrl: './facturesansdecoupage.component.html',
  styleUrls: ['./facturesansdecoupage.component.scss']
})
export class FacturesansdecoupageComponent {
 
  date: any;
  dataLoaded = false;
  sorties: any[] = [];
  Reference : any;
  Designation: any;
  

  calculerSommePrix(): number {
    let somme = 0;

    for (const sortie of this.sorties) {
      for (const article of sortie.Article) {
        somme += article.article.PrixVenteTTC;
      }
    }
  
    return somme;
  }

  constructor(private appService: AppService, private router: Router, private ac: ActivatedRoute) {
    const id: string = ac.snapshot.params['id'];
    this.appService.getVenteByClient(id).subscribe(
      (data: any) => {
          console.log('Sorties data:', data);
          this.sorties = data.sorties;
          this.dataLoaded = true;
          this.calculerSommePrix;
      },
      (error) => {
          console.error('Error fetching sorties:', error);
      }
    )

  }


}
