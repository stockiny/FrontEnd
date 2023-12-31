import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditbrandRoutingModule } from './editbrand-routing.module';
import { EditbrandComponent } from './editbrand.component';
import { FormsModule } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';


@NgModule({
  declarations: [
    EditbrandComponent
  ],
  imports: [
    CommonModule,
    EditbrandRoutingModule,
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
export class EditbrandModule { }
