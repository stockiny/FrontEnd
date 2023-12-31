import { Component } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {
  apiResultFormat,
  DataService,
  pageSelection,
  routes,
} from 'src/app/core/core.index';
import { PaginationService, tablePageSize } from 'src/app/shared/shared.index';
import { SweetalertService } from 'src/app/shared/sweetalert/sweetalert.service';
import { Router } from '@angular/router';
import { productList } from 'src/app/shared/model/page.model';
import { AppService } from 'src/app/app.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

interface data {
  value: string;
}
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss'],
})
export class ProductlistComponent {
  initChecked = false;
  public tableData: Array<any> = [];
  public routes = routes;
  public selectedValue1 = ''
  public selectedValue2 = ''
  public selectedValue3 = ''
  public selectedValue4 = ''
  public selectedValue5 = ''

  selectedList1: data[] = [
    { value: 'Choose Sub Category' },
    { value: 'Fruits' },
  ];
  selectedList2: data[] = [
    { value: 'Choose Product' },
    { value: 'Macbook pro' },
    { value: 'Orange' },
  ];
  selectedList3: data[] = [{ value: 'Brand' }, { value: 'N/D' }];
  selectedList4: data[] = [{ value: 'Price' }, { value: '150.00' }];
  selectedList5: data[] = [{ value: 'Price' }, { value: '150.00' }];
  // pagination variables
  public pageSize = 10;
  public serialNumberArray: Array<number> = [];
  public totalData = 0;
  showFilter = false;
  dataSource!: MatTableDataSource<productList>;
  public searchDataValue = '';
  //** / pagination variables

  constructor(
    private data: DataService,
    private pagination: PaginationService,
    private sweetlalert: SweetalertService,
    private router: Router,
    private appService:AppService
  ) {
    this.pagination.tablePageSize.subscribe((res: tablePageSize) => {
      if (this.router.url == this.routes.productList) {
        this.getTableData({ skip: res.skip, limit: res.limit });
        this.pageSize = res.pageSize;
      }
    });
  }
  deleteBtn(id) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'me-2 btn btn-danger'
      },
      buttonsStyling: false
    });
  
    // L'instruction suivante est vide intentionnellement car elle est utilisée pour la structure de contrôle SweetAlert2
    // eslint-disable-next-line no-empty
    swalWithBootstrapButtons.fire({
      title: 'Suppression?',
      text: 'Etes vous sur de supprimer!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, Supprimer!',
      cancelButtonText: 'Non, annuler!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.appService.deteleArticle(id).subscribe(response => {
          console.log(response);
          if (response.success) {
            const currentUrl = this.router.url;
            this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
              this.router.navigate([currentUrl]);
            });
          }
        });
  
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // Vous pouvez ajouter du code ici en cas d'annulation de la suppression
      }
    });
  }
  
  private getTableData(pageOption: pageSelection): void {
    this.appService.getArticles().subscribe((apiRes) => {
      console.log(apiRes)
      this.tableData = [];
      this.serialNumberArray = [];
      this.totalData = apiRes.totalData;
      apiRes.articles.map((res, index: number) => {
        const serialNumber = index + 1;
        if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
          res.sNo = serialNumber;
          this.tableData.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.dataSource = new MatTableDataSource<productList>(this.tableData);
      this.pagination.calculatePageSize.next({
        totalData: this.totalData,
        pageSize: this.pageSize,
        tableData: this.tableData,
        serialNumberArray: this.serialNumberArray,
      });
    });
  }

  public searchData(value: string): void {
    this.dataSource.filter = value.trim().toLowerCase();
    this.tableData = this.dataSource.filteredData;
  }

  public sortData(sort: Sort) {
    const data = this.tableData.slice();

    if (!sort.active || sort.direction === '') {
      this.tableData = data;
    } else {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      this.tableData = data.sort((a: any, b: any) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const aValue = (a as any)[sort.active];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const bValue = (b as any)[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
      });
    }
  }

  selectAll(initChecked: boolean) {
    if (!initChecked) {
      this.tableData.forEach((f) => {
        f.isSelected = true;
      });
    } else {
      this.tableData.forEach((f) => {
        f.isSelected = false;
      });
    }
  }
  getFullImageUrl(imageSrc: string): string {
    return environment.backendUrl +"/"+ imageSrc;
  }
  filter(){
    console.log('filter')
  }
}