import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { CouleurComponent } from './couleur/couleur.component';
import { sharedModule } from 'src/app/shared/shared.module';
import { AddcouleurComponent } from './addcouleur/addcouleur.component';
import { EditcouleurComponent } from './editcouleur/editcouleur.component';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddSerieComponent } from './add-serie/add-serie.component';
import { ListSerieComponent } from './list-serie/list-serie.component';
import { AddfourniseurComponent } from './addfourniseur/addfourniseur.component';
import { ListFournisseursComponent } from './list-fournisseurs/list-fournisseurs.component';
import { AddModelComponent } from './add-model/add-model.component';
import { FormsRoutingModule } from '../forms/forms-routing.module';
import { DevisComponent } from './devis/devis.component';

import { ListmodelComponent } from './listmodel/listmodel.component';
import { DetailmodelComponent } from './detailmodel/detailmodel.component';
import { ClientlistComponent } from './clientlist/clientlist.component';
import { AddclientComponent } from './addclient/addclient.component';

import { FacturesansdecoupageComponent } from './facturesansdecoupage/facturesansdecoupage.component';
import { UpdatePricesComponent } from './update-prices/update-prices.component';
import { DetailDevisComponent } from './detail-devis/detail-devis.component';



@NgModule({
  declarations: [
    ProductComponent,
    CouleurComponent,
    AddcouleurComponent,
    EditcouleurComponent,
    ListSerieComponent,
    AddSerieComponent,
    AddfourniseurComponent,
    ListFournisseursComponent,
    AddModelComponent,
    DevisComponent,

    ListmodelComponent,
    DetailmodelComponent,
    ClientlistComponent,
    AddclientComponent,
    FacturesansdecoupageComponent,
    UpdatePricesComponent,
    DetailDevisComponent,


  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    sharedModule,
    FormsModule,
    FormsRoutingModule,
    ReactiveFormsModule,



    ToastrModule.forRoot({
      timeOut: 1000,
      progressBar: true,
      progressAnimation: 'increasing',
      preventDuplicates: true

    }),
  ],
  providers: [
    {
      provide: ToastrService,
    }
  ]
})
export class ProductModule { }
