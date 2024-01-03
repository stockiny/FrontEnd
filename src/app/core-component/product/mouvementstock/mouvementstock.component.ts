import { Component } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { DataService, pageSelection } from 'src/app/core/core.index';
import { routes } from 'src/app/core/helpers/routes';
import { MouvementStock } from 'src/app/shared/model/page.model';
import { PaginationService, tablePageSize } from 'src/app/shared/shared.index';
import { SweetalertService } from 'src/app/shared/sweetalert/sweetalert.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mouvementstock',
  templateUrl: './mouvementstock.component.html',
  styleUrls: ['./mouvementstock.component.scss']
})

export class MouvementstockComponent {
  
  initChecked = false;
  public tableData: Array<MouvementStock> = [];
  public couleurData: Array<MouvementStock> = [];

  public routes = routes;
  public selectedValue1 = ''
  public selectedValue2 = '';
  public selectedValue3 = '';



 
  // pagination variables
  public pageSize = 10;
  public serialNumberArray: Array<number> = [];
  public totalData = 0;
  showFilter = false;
  dataSource!: MatTableDataSource<MouvementStock>;
  public searchDataValue = '';
  //** / pagination variables

  constructor(
    private data: DataService,
    private pagination: PaginationService,
    private sweetalert: SweetalertService,
    private router: Router,
    private appService: AppService
  ) {
    this.pagination.tablePageSize.subscribe((res: tablePageSize) => {

      this.getTableData({ skip: res.skip, limit: res.limit });
      this.pageSize = res.pageSize;

    });
  }



  deleteBtn(id) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'me-2 btn btn-danger'
      },
      buttonsStyling: false
    })
    // this.sweetalert.deleteBtn();
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.appService.deteleFournisseur(id)
          .subscribe(response => {
            console.log(response)
            if (response.success) {
              const currentUrl = this.router.url;
              this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
                this.router.navigate([currentUrl]);
              });
            }
          }
          );

        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )


      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        );

      }
    })
  }



  private getTableData(pageOption: pageSelection): void {
    this.appService.getMouvementStock().subscribe((apiRes) => {
      this.couleurData = [];
      this.tableData = [];
      this.serialNumberArray = [];
      this.totalData = apiRes.stock.length;
      apiRes.stock.map((res: MouvementStock, index: number) => {
        const serialNumber = index + 1;
        if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
          res.sNo = serialNumber;
          this.couleurData.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      console.log(this.tableData)
      this.dataSource = new MatTableDataSource<MouvementStock>(this.couleurData);
      this.pagination.calculatePageSize.next({
        totalData: this.totalData,
        pageSize: this.pageSize,
        tableData: this.couleurData,
        serialNumberArray: this.serialNumberArray,
      });
    });
  }

  public searchData(value: string): void {
    this.dataSource.filter = value.trim().toLowerCase();
    this.couleurData = this.dataSource.filteredData;
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
      this.couleurData.forEach((f) => {
        f.isSelected = true;
      });
      console.log(this.tableData)
    } else {
      this.couleurData.forEach((f) => {
        f.isSelected = false;
      });
    }
  }

}
