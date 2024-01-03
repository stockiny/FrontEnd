import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { routes } from 'src/app/core/core.index';

@Component({
  selector: 'app-detailmodel',
  templateUrl: './detailmodel.component.html',
  styleUrls: ['./detailmodel.component.scss']
})
export class DetailmodelComponent {

  model: any;
  dataLoaded = false;
  sorties: any[] = [];



  public routes = routes;

  constructor(
    private activatedRoute: ActivatedRoute,
    private appService: AppService
  ) { }

  imprimerFacture(): void {
    window.print();
  }

  calculerSommePrix(): number {
    let somme = 0;

    for (const sortie of this.sorties) {
      for (const article of sortie.Article) {
        somme += article.article.PrixVenteTTC;
      }
    }
  
    return somme;
  }
  calculerSommePrixHT(): number {
    let sommeHT = 0;

    for (const sortie of this.sorties) {
      for (const article of sortie.Article) {
        sommeHT += article.article.PrixAchatHT;
      }
    }
  
    return sommeHT;
  }
  

  ngOnInit(): void {
    console.log("pl");
    this.activatedRoute.paramMap.subscribe(params => {
        const clientId = params.get('id');
        console.log(clientId);
        this.appService.getVenteByClient(clientId).subscribe(
          (data: any) => {
              console.log('Sorties data:', data);
              this.sorties = data.sorties;
              this.dataLoaded = true;
              this.calculerSommePrix 
          },
          (error) => {
              console.error('Error fetching sorties:', error);
          }
      );
    });
}

}