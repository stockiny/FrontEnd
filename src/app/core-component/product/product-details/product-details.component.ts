import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AppService } from 'src/app/app.service';
import { environment } from 'src/environments/environment';
import { routes } from 'src/app/core/core.index';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent {
 
  model: any;
  dataLoaded = false;
  articles: any;


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
        this.appService.getArticleById(modelId).subscribe(
          (data) => {
            console.log(data);
            this.model = data.model;
            this.articles = this.model;
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
