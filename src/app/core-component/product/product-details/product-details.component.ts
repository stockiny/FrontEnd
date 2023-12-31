import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AppService } from 'src/app/app.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
    },
    nav: true,
  };
  id:any;
  materiel:any;
  image:any;
  constructor(private route: ActivatedRoute,private appService:AppService) {
    this.route.params.subscribe(params => {
      this.id = params['id']; // Access the 'id' parameter from the route
    });
   }

   ngOnInit(): void {
    this.appService.getArticleById(this.id)
    .subscribe(response => {
      console.log(response)
      this.materiel=response.materiel;
      this.image=environment.backendUrl+"/"+response.materiel.Photo;


    }
    );
  }
   

   

}
