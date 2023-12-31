import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';

import { CouleurComponent } from './couleur/couleur.component';
import { AddcouleurComponent } from './addcouleur/addcouleur.component';
import { EditcouleurComponent } from './editcouleur/editcouleur.component';
import { ListSerieComponent } from './list-serie/list-serie.component';
import { AddSerieComponent } from './add-serie/add-serie.component';
import { AddfourniseurComponent } from './addfourniseur/addfourniseur.component';
import { ListFournisseursComponent } from './list-fournisseurs/list-fournisseurs.component';
import { AddModelComponent } from './add-model/add-model.component';
import { DevisComponent } from './devis/devis.component';

import { ListmodelComponent } from './listmodel/listmodel.component';
import { DetailmodelComponent } from './detailmodel/detailmodel.component';
import { ClientlistComponent } from './clientlist/clientlist.component';
import { AddclientComponent } from './addclient/addclient.component';
import { FacturesansdecoupageComponent } from './facturesansdecoupage/facturesansdecoupage.component';
import { UpdatePricesComponent } from './update-prices/update-prices.component';
import { DetailDevisComponent } from './detail-devis/detail-devis.component';


const routes: Routes = [
  { path: '', redirectTo: 'productlist', pathMatch: 'full' },
  { path: 'couleurs', component: CouleurComponent },
  { path: 'add-couleur', component: AddcouleurComponent },
  { path: 'edit-couleur/:id', component: EditcouleurComponent },
  { path: 'serie-list', component: ListSerieComponent },
  { path: 'serie-add', component: AddSerieComponent },
  { path: 'addFourniseur', component: AddfourniseurComponent },
  { path: 'fournisseurs', component: ListFournisseursComponent },
  { path: 'add-Model', component: AddModelComponent },
  { path: 'list-Model', component: ListmodelComponent },
  { path: 'devis', component: DevisComponent },
  { path: 'detailmodel/:id', component: DetailmodelComponent },
  { path: 'clients', component: ClientlistComponent },
  { path: 'add-client', component: AddclientComponent },
  { path: 'devis', component: DevisComponent },
  { path: 'devis/:id', component:DetailDevisComponent },

  { path: 'updatePrices', component: UpdatePricesComponent },
  { path: 'factureSansDecoupage/:id', component: FacturesansdecoupageComponent },





  {
    path: '',
    component: ProductComponent,
    children: [
      {
        path: 'product-list',
        loadChildren: () =>
          import('./productlist/productlist.module').then(
            (m) => m.ProductlistModule
          ),
      },
      {
        path: 'add-product',
        loadChildren: () =>
          import('./addproduct/addproduct.module').then(
            (m) => m.AddproductModule
          ),
      },
      {
        path: 'category-list',
        loadChildren: () =>
          import('./categorylist/categorylist.module').then(
            (m) => m.CategorylistModule
          ),
      },
      {
        path: 'add-category',
        loadChildren: () =>
          import('./addcategory/addcategory.module').then(
            (m) => m.AddcategoryModule
          ),
      },

      {
        path: 'sub-category-list',
        loadChildren: () =>
          import('./subcategorylist/subcategorylist.module').then(
            (m) => m.SubcategorylistModule
          ),
      },
      {
        path: 'sub-add-category',
        loadChildren: () =>
          import('./subaddcategory/subaddcategory.module').then(
            (m) => m.SubaddcategoryModule
          ),
      },
      {
        path: 'add-brand',
        loadChildren: () =>
          import('./addbrand/addbrand.module').then((m) => m.AddbrandModule),
      },
      {
        path: 'import-product',
        loadChildren: () =>
          import('./importproduct/importproduct.module').then(
            (m) => m.ImportproductModule
          ),
      },
      {
        path: 'barcode',
        loadChildren: () =>
          import('./barcode/barcode.module').then((m) => m.BarcodeModule),
      },
      {
        path: 'edit-product',
        loadChildren: () =>
          import('./editproduct/editproduct.module').then(
            (m) => m.EditproductModule
          ),
      },
      {
        path: 'edit-category',
        loadChildren: () =>
          import('./editcategory/editcategory.module').then(
            (m) => m.EditcategoryModule
          ),
      },
      {
        path: 'edit-subcategory',
        loadChildren: () =>
          import('./editsubcategory/editsubcategory.module').then(
            (m) => m.EditsubcategoryModule
          ),
      },
      {
        path: 'edit-brand',
        loadChildren: () =>
          import('./editbrand/editbrand.module').then((m) => m.EditbrandModule),
      },
      {
        path: 'product-details',
        loadChildren: () =>
          import('./product-details/product-details.module').then(
            (m) => m.ProductDetailsModule
          ),
      },
      {
        path: 'brand-list',
        loadChildren: () =>
          import('./brandlist/brandlist.module').then((m) => m.BrandlistModule),
      },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule { }
