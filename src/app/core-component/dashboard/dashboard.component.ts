import { Component, ViewChild } from '@angular/core';
import { Sort } from '@angular/material/sort';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexXAxis,
  ApexResponsive,
  ApexLegend,
  ApexFill,
} from 'ng-apexcharts';
import { AppService } from 'src/app/app.service';
import { CommonService, SettingsService } from 'src/app/core/core.index';

export type ChartOptions = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  series: ApexAxisChartSeries | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  chart: ApexChart | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  responsive: ApexResponsive | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  colors: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dataLabels: ApexDataLabels | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  plotOptions: ApexPlotOptions | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  yaxis: ApexYAxis | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  xaxis: ApexXAxis | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  legend: ApexLegend | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fill: ApexFill | any;
};
import { routes } from 'src/app/core/helpers/routes';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  public routes = routes;

  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public currency!: string;
  public sortedVentes: any[] = [];
  clients:any;
  fournisseurs:any;
  articles:any;
  vente:any;
  ventes: any[] = [];
  sumOfPrices: any = 0;
  sumOfPricesTTC: any = 0;

  public sortedArticles: any[] ;

  constructor(private common: CommonService, private setting : SettingsService,private appService:AppService) {
    this.chartOptions = {
      series: [
        {
          name: 'Sales',
          color: '#EA5455',
          data: [50, 45, 60, 70, 50, 45, 60, 70],
        },
        {
          name: 'Purchase',
          color: '#28C76F',
          data: [-21, -54, -45, -35, -21, -54, -45, -35],
        },
      ],
      chart: {
        type: 'bar',
        height: 300,
        stacked: true,
        zoom: {
          enabled: true,
        },
      },
      
      responsive: {
        breakpoint: 280,
        options: {
          legend: {
            position: 'bottom',
            offsetY: 0,
          },
        },
      },
      plotOptions: {
        area: {
          fillTo: 'end',
        },
        bar: {
          horizontal: false,
          columnWidth: '20%',
          borderRadius: 7,
          borderRadiusApplication: 'end',
          borderRadiusWhenStacked: 'all',
          distributed: true,
          colors: {
            ranges: [
              {
                from: 0,
                to: 100000,
                color: '#28C76F',
              },
              {
                from: -100000,
                to: 0,
                color: '#EA5455',
              },
            ],
          },
        },
      },
      xaxis: {
        categories: [
          ' Jan ',
          'feb',
          'march',
          'april',
          'may',
          'june',
          'july',
          'auguest',
        ],
      },

      legend: {
        position: 'right',
        offsetY: 40,
      },
      fill: {
        opacity: 1,
      },
    };
    this.common.currency$.subscribe((res: string) => {
      this.currency = res;
    });
  }


  ngOnInit(): void {
    this.appService.getAllClients().subscribe(res=>{
      console.log(res)
      this.clients=res.clients;
    });
    this.appService.getFournisseurs().subscribe(res=>{
      console.log(res)
      this.fournisseurs=res.fournisseurs;
    });
    this.appService.getArticles().subscribe(res=>{
      console.log(res)
      this.articles=res.articles;
    });
    this.appService.getAllVentes().subscribe(res => {
      console.log(res);
      this.ventes = res.vente;
    });
    this.appService.getSumOfPrices().subscribe(
      (data: any) => {
        this.sumOfPrices = data.sum;
      },
      (error) => {
        console.error('Error fetching sum of prices:', error);
      }
    );
    this.appService.getSumOfPricesTTC().subscribe(
      (data: any) => {
        this.sumOfPricesTTC = data.sum;
      },
      (error) => {
        console.error('Error fetching sum of prices:', error);
      }
    );
   


   
   
  }

   

  public sortRecentlyAddedProducts(sort: Sort) {
    this.appService.getArticles().subscribe(
      (data: any) => {
        if (!sort.active || sort.direction === '') {
          // Mettez à jour la propriété sortedArticles avec les données triées
          this.sortedArticles = data.articles.map((article: any, index: number) => {
            return {
              Sno: index + 1,
              Reference: article.Reference,
              Designation: article.Designation,
              Price: article.PrixVenteTTC
            };
          });
        } else {
          // Mettez à jour la propriété sortedArticles avec les données triées
          this.sortedArticles = data.articles.sort((a: any, b: any) => {
            const aValue = a[sort.active];
            const bValue = b[sort.active];
            return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
          });
        }
      },
      (error) => {
        console.error('Error fetching articles:', error);
      }
    );
  }
  
  
  public sortExpiredProducts(sort: Sort) {
  this.appService.getAllVentes().subscribe(
    (data: any) => {
      if (!sort.active || sort.direction === '') {
        this.ventes = data; // Mettez à jour la propriété 'ventes' avec les données non triées
        this.sortedVentes = [...this.ventes]; // Copiez les données dans 'sortedVentes'
      } else {
        // Triez les données et mettez à jour les deux propriétés
        this.ventes = data;
        this.sortedVentes = data.sort((a: any, b: any) => {
          const aValue = a[sort.active];
          const bValue = b[sort.active];
          return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
        });
      }
    },
    (error) => {
      console.error('Error fetching ventes:', error);
    }
  );
}

  }
  

