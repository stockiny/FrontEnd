import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddbrandRoutingModule } from './addbrand-routing.module';
import { AddbrandComponent } from './addbrand.component';
import { FormsModule } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@NgModule({
  declarations: [
    AddbrandComponent
  ],
  imports: [
    CommonModule,
    AddbrandRoutingModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut:1000,
      progressBar:true,
      progressAnimation:'increasing',
      preventDuplicates:true
      
    }), 
  ],
  providers: [
    { 
      provide: ToastrService, 
    }
  ]
})
export class AddbrandModule { }
