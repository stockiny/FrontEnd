import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-facturesansdecoupage',
  templateUrl: './facturesansdecoupage.component.html',
  styleUrls: ['./facturesansdecoupage.component.scss']
})
export class FacturesansdecoupageComponent {
  devis: any;
  models: any;
  date: any;

  constructor(private appService: AppService, private router: Router, private ac: ActivatedRoute) {
    const id: string = ac.snapshot.params['id'];
    this.appService.getDevisById(id).subscribe(
      res => {
        this.devis = res.devis;
        this.models = res.devis.Models;
        const dateObject: Date = new Date(res.devis.Date);
        this.date = dateObject.toLocaleDateString("en-GB");
        console.log(res);
      }
    )
  }


}
