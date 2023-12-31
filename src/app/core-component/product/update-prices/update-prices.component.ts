import { Component } from '@angular/core';
import { bo } from '@fullcalendar/core/internal-common';
import { AppService } from 'src/app/app.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-prices',
  templateUrl: './update-prices.component.html',
  styleUrls: ['./update-prices.component.scss']
})
export class UpdatePricesComponent {
  constructor(private appService: AppService, private toastr: ToastrService) { }
  operation: any;
  percent: any;
  save() {
    const body = {
      percent: this.percent,
      operation: this.operation


    }
    console.log(body);
    this.appService.updatePrices(body).subscribe(res => {
      console.log(res);
      if (res.success) {
        this.percent = null;
        this.toastr.success('Les prix sont édités avec succès!', '', {
          timeOut: 2000,
          progressBar: true,
          progressAnimation: 'increasing',
          positionClass: 'toast-top-right'
        });

      }

    })
  }

}
