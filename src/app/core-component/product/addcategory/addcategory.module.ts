import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AddcategoryRoutingModule } from './addcategory-routing.module';
import { AddcategoryComponent } from './addcategory.component';
import { ToastrModule, ToastrService } from 'ngx-toastr';


@NgModule({
  declarations: [
    AddcategoryComponent,
    
  ],
  imports: [
    CommonModule,
    AddcategoryRoutingModule,
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
export class AddcategoryModule { }
