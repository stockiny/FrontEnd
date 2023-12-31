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
  Vitrage: any;
  Profiles: any;
  accesssoires: any;
  autres: any;


  public routes = routes;

  constructor(
    private activatedRoute: ActivatedRoute,
    private appService: AppService
  ) { }

  ngOnInit(): void {
    console.log("pl")
    this.activatedRoute.paramMap.subscribe(params => {
      const modelId = params.get('id');
      console.log(modelId);
      if (modelId) {
        this.appService.getModeltDetail(modelId).subscribe(
          (data) => {
            console.log(data);
            this.model = data.model;
            this.Vitrage = this.model.Vitrage;
            this.Profiles = this.model.Profiles;
            this.accesssoires = this.model.Accessoires;
            this.autres = this.model.Autres;
            this.dataLoaded = true; // Indiquer que les données sont chargées
          },
          (error) => {
            console.error('Error fetching model details:', error);
          }
        );
      }
    });
  }
}
