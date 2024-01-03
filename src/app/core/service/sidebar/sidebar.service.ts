import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { routes } from '../../core.index';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {

  public sideBarPosition: BehaviorSubject<string> = new BehaviorSubject<string>(
    localStorage.getItem('sideBarPosition') || 'false'
  );

  public toggleMobileSideBar: BehaviorSubject<string> =
    new BehaviorSubject<string>(
      localStorage.getItem('isMobileSidebar') || 'false'
    );

  public expandSideBar: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  public switchSideMenuPosition(): void {
    if (localStorage.getItem('sideBarPosition')) {
      this.sideBarPosition.next('false');
      this.expandSideBar.next(true);
      localStorage.removeItem('sideBarPosition');
    } else {
      this.sideBarPosition.next('true');
      this.expandSideBar.next(false);
      localStorage.setItem('sideBarPosition', 'true');
    }
  }

  public switchMobileSideBarPosition(): void {
    if (localStorage.getItem('isMobileSidebar')) {
      this.toggleMobileSideBar.next('false');
      localStorage.removeItem('isMobileSidebar');
    } else {
      this.toggleMobileSideBar.next('true');
      localStorage.setItem('isMobileSidebar', 'true');
    }
  }


  public sidebarData1 = [
    {
      tittle: 'Main',
      showAsTab: true,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Dashboard',
          route: routes.dashboard,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'grid',
          subMenus: [],
        },

      ],
    },
    {
      tittle: 'Article',
      showAsTab: true,
      separateRoute: false,
      menu: [
        {
          menuValue: 'List Des Article',
          route: routes.productList,
          page: 'edit-product',
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'box',
          subMenus: [],
        },
        {
          menuValue: 'Nouveau Article',
          route: routes.addProduct,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'plus-square',
          subMenus: [],
        }
      ]
    },
    {
      tittle: 'Vente',
      showAsTab: true,
      separateRoute: false,
      menu: [
        {
          menuValue: 'List Des Ventes',
          route: routes.listmodel,
          page: 'edit-product',
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'box',
          subMenus: [],
        },
        {
          menuValue: 'Nouvelle Vente',
          route: routes.addModel,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'plus-square',
          subMenus: [],
        }
      ]
    },
    {
      tittle: ' Categorie',
      showAsTab: true,
      separateRoute: false,
      menu: [{
        menuValue: 'Categories',
        page: 'add-category',
        page2: 'edit-category',
        route: routes.categoryList,
        hasSubRoute: false,
        showSubRoute: false,
        icon: 'codepen',
        subMenus: [],
      },
      {
        menuValue: 'Ajouter Categorie',
        route: routes.addCategory,
        hasSubRoute: false,
        showSubRoute: false,
        icon: 'align-justify',
        subMenus: [],

      }
      
     ]
    },
    
    
   
    {
      tittle: 'Client',
      showAsTab: true,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Liste Clients',

          route: routes.ListClient,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'user',
          subMenus: [],
        },
        {
          menuValue: 'Nouveau Client',

          route: routes.addClient,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'plus-square',
          subMenus: [],
        },]
    },
    {
      tittle: 'Fournisseur',
      showAsTab: true,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Liste Fournisseurs',

          route: routes.Fournisseurs,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'shopping-bag',
          subMenus: [],
        },
        {
          menuValue: 'Nouveau Fournisseur',

          route: routes.addFournisseur,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'plus-square',
          subMenus: [],
        },]
    },
    {
      tittle: 'Mouvement Stock',
      showAsTab: true,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Stock',
          route: routes.mouvementstock,
          page: 'mouvementstock',
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'box',
          subMenus: [],
        },
    
      ]
    }
    /*
        {
          tittle: 'Sales',
          showAsTab: true,
          separateRoute: false,
          menu: [
            {
              menuValue: 'Sales',
              route: routes.salesList,
              hasSubRoute: false,
              showSubRoute: false,
              page: 'add-sales',
              page2: 'edit-sales',
              icon: 'shopping-cart',
              subMenus: [],
            },
            {
              menuValue: 'Invoices',
              route: routes.invoiceReport,
              hasSubRoute: false,
              showSubRoute: false,
              icon: 'file-text',
              subMenus: [],
            },
            {
              menuValue: 'Sales Return',
              route: routes.salesReturnLists,
              page: 'create-sales-return',
              page2: 'edit-sales-returns',
              hasSubRoute: false,
              showSubRoute: false,
              icon: 'copy',
              subMenus: [],
            },
            {
              menuValue: 'Quotation',
              route: routes.quotationList,
              page: 'add-quotation',
              page2: 'edit-quotation',
              hasSubRoute: false,
              showSubRoute: false,
              icon: 'save',
              subMenus: [],
            },
            {
              menuValue: 'POS',
              route: routes.pos,
              hasSubRoute: false,
              showSubRoute: false,
              icon: 'hard-drive',
              subMenus: [],
            },
            {
              menuValue: 'Transfer',
              route: routes.transfer,
              hasSubRoute: true,
              showSubRoute: false,
              icon: 'shuffle',
              subMenus: [
                {
                  menuValue: 'Transfer List',
                  hasSubRoute: false,
                  showSubRoute: false,
                  page: 'add-transfer',
                  page2: 'edit-transfer',
                  route: routes.transferList,
                  subRoutes: [],
                },
                {
                  menuValue: 'Import Transfer',
                  hasSubRoute: false,
                  showSubRoute: false,
                  route: routes.importTransfer,
                  subRoutes: [],
                },
              ],
            },
            {
              menuValue: 'Return',
              route: routes.return,
              hasSubRoute: true,
              showSubRoute: false,
              icon: 'corner-up-left',
              subMenus: [
                {
                  menuValue: 'Sales Return',
                  hasSubRoute: false,
                  showSubRoute: false,
                  route: routes.salesReturnList,
                  subRoutes: [],
                },
                {
                  menuValue: 'Purchase Return',
                  hasSubRoute: false,
                  showSubRoute: false,
                  route: routes.purchaseReturnList,
                  subRoutes: [],
                },
              ],
            },
          ],
        },
        {
          tittle: 'Purchases',
          showAsTab: true,
          separateRoute: false,
          menu: [
            {
              menuValue: 'Purchases',
              route: routes.purchaseList,
              hasSubRoute: false,
              showSubRoute: false,
              icon: 'shopping-bag',
              subMenus: [],
            },
            {
              menuValue: 'Import Purchases',
              route: routes.importPurchase,
              hasSubRoute: false,
              showSubRoute: false,
              icon: 'minimize-2',
              subMenus: [],
            },
            {
              menuValue: 'Purchase Order',
              route: routes.purchaseOrderReport,
              hasSubRoute: false,
              showSubRoute: false,
              icon: 'file-minus',
              subMenus: [],
            },
            {
              menuValue: 'Purchase Return',
              route: routes.purchaseReturnList,
              hasSubRoute: false,
              showSubRoute: false,
              icon: 'refresh-cw',
              subMenus: [],
            },
          ],
        },
        {
          tittle: 'Finance & Accounts',
          showAsTab: true,
          separateRoute: false,
          menu: [
            {
              menuValue: 'Expense',
              route: routes.expense,
              hasSubRoute: true,
              showSubRoute: false,
              icon: 'file-text',
              subMenus: [
                {
                  menuValue: 'Expenses',
                  hasSubRoute: false,
                  showSubRoute: false,
                  route: routes.expenseList,
                  subRoutes: [],
                },
                {
                  menuValue: 'Expense Category',
                  hasSubRoute: false,
                  showSubRoute: false,
                  route: routes.expenseCategory,
                  subRoutes: [],
                },
              ],
            },
          ],
        },
        {
          tittle: 'Peoples',
          showAsTab: true,
          separateRoute: false,
          menu: [
            {
              menuValue: 'Customers',
              route: routes.customerList,
              hasSubRoute: false,
              showSubRoute: false,
              icon: 'user',
              subMenus: [],
            },
            {
              menuValue: 'Suppliers',
              route: routes.supplierList,
              hasSubRoute: false,
              showSubRoute: false,
              icon: 'users',
              subMenus: [],
            },
            {
              menuValue: 'Users',
              route: routes.userList,
              hasSubRoute: false,
              showSubRoute: false,
              icon: 'user-check',
              subMenus: [],
            },
            {
              menuValue: 'Stores',
              route: routes.storeList,
              hasSubRoute: false,
              showSubRoute: false,
              icon: 'home',
              subMenus: [],
            },
          ],
        },
        {
          tittle: 'Reports',
          showAsTab: true,
          separateRoute: false,
          menu: [
            {
              menuValue: 'Sales Report',
              route: routes.salesReport,
              hasSubRoute: false,
              showSubRoute: false,
              icon: 'bar-chart-2',
              subMenus: [],
            },
            {
              menuValue: 'Purchase Report',
              route: routes.purchaseReport,
              hasSubRoute: false,
              showSubRoute: false,
              icon: 'pie-chart',
              subMenus: [],
            },
            {
              menuValue: 'Inventory Report',
              route: routes.inventoryReport,
              hasSubRoute: false,
              showSubRoute: false,
              icon: 'credit-card',
              subMenus: [],
            },
            {
              menuValue: 'Invoice Report',
              route: routes.invoiceReport,
              hasSubRoute: false,
              showSubRoute: false,
              icon: 'file',
              subMenus: [],
            },
            {
              menuValue: 'Purchase Report',
              route: routes.purchaseOrderReport,
              hasSubRoute: false,
              showSubRoute: false,
              icon: 'bar-chart',
              subMenus: [],
            },
            {
              menuValue: 'Supplier Report',
              route: routes.supplierReport,
              hasSubRoute: false,
              showSubRoute: false,
              icon: 'database',
              subMenus: [],
            },
            {
              menuValue: 'Customer Report',
              route: routes.customerReport,
              hasSubRoute: false,
              showSubRoute: false,
              icon: 'pie-chart',
              subMenus: [],
            },
          ],
        },
        {
          tittle: 'User Management',
          showAsTab: true,
          separateRoute: false,
          menu: [
            {
              menuValue: 'Manage Users',
              route: routes.users,
              hasSubRoute: true,
              showSubRoute: false,
              icon: 'users',
              subMenus: [
                {
                  menuValue: 'New User',
                  hasSubRoute: false,
                  showSubRoute: false,
                  route: routes.newUser,
                  subRoutes: [],
                },
                {
                  menuValue: 'Users List',
                  hasSubRoute: false,
                  showSubRoute: false,
                  route: routes.usersUserList,
                  subRoutes: [],
                },
              ],
            },
          ],
        },
        {
          tittle: 'Pages',
          showAsTab: true,
          separateRoute: false,
          menu: [
            {
              menuValue: 'Authentication',
              route: routes.auth,
              hasSubRoute: true,
              showSubRoute: false,
              icon: 'shield',
              subMenus: [
                {
                  menuValue: 'Login',
                  hasSubRoute: false,
                  showSubRoute: false,
                  route: routes.signIn,
                  subRoutes: [],
                },
                {
                  menuValue: 'Register',
                  hasSubRoute: false,
                  showSubRoute: false,
                  route: routes.signUp,
                  subRoutes: [],
                },
                {
                  menuValue: 'Forgot Password',
                  hasSubRoute: false,
                  showSubRoute: false,
                  route: routes.forgotPassword,
                  subRoutes: [],
                },
                {
                  menuValue: 'Reset Password',
                  hasSubRoute: false,
                  showSubRoute: false,
                  route: routes.forgotPassword,
                  subRoutes: [],
                },
              ],
            },
            {
              menuValue: 'Error Pages',
              hasSubRoute: true,
              showSubRoute: false,
              icon: 'file-minus',
              route: routes.errorPages,
              subMenus: [
                {
                  menuValue: '404 Error',
                  hasSubRoute: false,
                  showSubRoute: false,
                  route: routes.errorPage404,
                  subRoutes: [],
                },
                {
                  menuValue: '500 Error',
                  hasSubRoute: false,
                  showSubRoute: false,
                  route: routes.errorPage500,
                  subRoutes: [],
                },
              ],
            },
            {
              menuValue: 'Places',
              hasSubRoute: true,
              icon: 'map',
              showSubRoute: false,
              route: routes.places,
              subMenus: [
                {
                  menuValue: 'Countries',
                  hasSubRoute: false,
                  showSubRoute: false,
                  route: routes.countriesList,
                  subMenus: [],
                },
                {
                  menuValue: 'States',
                  hasSubRoute: false,
                  showSubRoute: false,
                  route: routes.stateList,
                  subMenus: [],
                },
              ],
            },
            {
              menuValue: 'Blank Page',
              hasSubRoute: false,
              icon: 'file',
              showSubRoute: false,
              route: routes.blankPage,
              subMenus: [],
            },
            {
              menuValue: 'Components',
              hasSubRoute: false,
              icon: 'hard-drive',
              showSubRoute: false,
              route: routes.components,
              subMenus: [],
            },
          ],
        },
        {
          tittle: 'UI Interface',
          showAsTab: true,
          separateRoute: false,
          menu: [
            {
              menuValue: 'Elements',
              hasSubRoute: true,
              icon: 'layers',
              showSubRoute: false,
              route: routes.element,
              subMenus: [
                {
                  menuValue: 'Sweet Alerts',
                  hasSubRoute: false,
                  showSubRoute: false,
                  route: routes.sweetAlerts,
                  subRoutes: [],
                },
                {
                  menuValue: 'Tooltip',
                  hasSubRoute: false,
                  showSubRoute: false,
                  route: routes.tooltip,
                  subRoutes: [],
                },
                {
                  menuValue: 'Popover',
                  hasSubRoute: false,
                  showSubRoute: false,
                  route: routes.popover,
                  subRoutes: [],
                },
                {
                  menuValue: 'Ribbon',
                  hasSubRoute: false,
                  showSubRoute: false,
                  route: routes.ribbon,
                  subRoutes: [],
                },
                {
                  menuValue: 'Clipboard',
                  hasSubRoute: false,
                  showSubRoute: false,
                  route: routes.clipboard,
                  subRoutes: [],
                },
                {
                  menuValue: 'Drag & Drop',
                  hasSubRoute: false,
                  showSubRoute: false,
                  route: routes.dragDrop,
                  subRoutes: [],
                },
                {
                  menuValue: 'Range Slider',
                  hasSubRoute: false,
                  showSubRoute: false,
                  route: routes.rangeSlider,
                  subRoutes: [],
                },
                {
                  menuValue: 'Rating',
                  hasSubRoute: false,
                  showSubRoute: false,
                  route: routes.rating,
                  subRoutes: [],
                },
                {
                  menuValue: 'Toaster',
                  hasSubRoute: false,
                  showSubRoute: false,
                  route: routes.toaster,
                  subRoutes: [],
                },
    
                {
                  menuValue: 'Text Editor',
                  hasSubRoute: false,
                  showSubRoute: false,
                  route: routes.textEditor,
                  subRoutes: [],
                },
                {
                  menuValue: 'Counter',
                  hasSubRoute: false,
                  showSubRoute: false,
                  route: routes.counter,
                  subRoutes: [],
                },
                {
                  menuValue: 'Scrollbar',
                  hasSubRoute: false,
                  showSubRoute: false,
                  route: routes.scrollbar,
                  subRoutes: [],
                },
                {
                  menuValue: 'Spinner',
                  hasSubRoute: false,
                  showSubRoute: false,
                  route: routes.spinner,
                  subRoutes: [],
                },
                {
                  menuValue: 'Notification',
                  hasSubRoute: false,
                  showSubRoute: false,
                  route: routes.notification,
                  subRoutes: [],
                },
                {
                  menuValue: 'Lightbox',
                  hasSubRoute: false,
                  showSubRoute: false,
                  route: routes.lightbox,
                  subRoutes: [],
                },
                {
                  menuValue: 'Timeline',
                  hasSubRoute: false,
                  showSubRoute: false,
                  route: routes.timeline,
                  subRoutes: [],
                },
                {
                  menuValue: 'Form Wizard',
                  hasSubRoute: false,
                  showSubRoute: false,
                  route: routes.formWizard,
                  subRoutes: [],
                },
              ],
            },
            {
              menuValue: 'Charts',
              hasSubRoute: true,
              icon: 'bar-chart-2',
              showSubRoute: false,
              route: routes.charts,
              subMenus: [
                {
                  menuValue: 'Apex Charts',
                  hasSubRoute: false,
                  showSubRoute: false,
                  route: routes.chartApex,
                  subRoutes: [],
                },
                {
                  menuValue: 'Ng2 Charts',
                  hasSubRoute: false,
                  showSubRoute: false,
                  route: routes.chartNg2,
                  subRoutes: [],
                },
                {
                  menuValue: 'Prime NG Charts',
                  hasSubRoute: false,
                  showSubRoute: false,
                  route: routes.chartPrime,
                  subRoutes: [],
                },
              ],
            },
    
            {
              menuValue: 'Icons',
              hasSubRoute: true,
              icon: 'database',
              showSubRoute: false,
              route: routes.icons,
              subMenus: [
                {
                  menuValue: 'Fontawesome Icons',
                  hasSubRoute: false,
                  showSubRoute: false,
                  route: routes.iconFontAwesome,
                  subRoutes: [],
                },
                {
                  menuValue: 'Feather Icons',
                  hasSubRoute: false,
                  showSubRoute: false,
                  route: routes.iconFeather,
                  subRoutes: [],
                },
                {
                  menuValue: 'Ionic Icons',
                  hasSubRoute: false,
                  showSubRoute: false,
                  route: routes.iconIonic,
                  subRoutes: [],
                },
                {
                  menuValue: 'Material Icons',
                  hasSubRoute: false,
                  showSubRoute: false,
                  route: routes.iconMaterial,
                  subRoutes: [],
                },
                {
                  menuValue: 'Pe7 Icons',
                  hasSubRoute: false,
                  showSubRoute: false,
                  route: routes.iconPe7,
                  subRoutes: [],
                },
                {
                  menuValue: 'Simpleline Icons',
                  hasSubRoute: false,
                  showSubRoute: false,
                  route: routes.iconSimpleline,
                  subRoutes: [],
                },
                {
                  menuValue: 'Themify Icons',
                  hasSubRoute: false,
                  showSubRoute: false,
                  route: routes.iconThemify,
                  subRoutes: [],
                },
                {
                  menuValue: 'Weather Icons',
                  hasSubRoute: false,
                  showSubRoute: false,
                  route: routes.iconWeather,
                  subRoutes: [],
                },
                {
                  menuValue: 'Typicon Icons',
                  hasSubRoute: false,
                  showSubRoute: false,
                  route: routes.iconTypicon,
                  subRoutes: [],
                },
                {
                  menuValue: 'Flag Icons',
                  hasSubRoute: false,
                  showSubRoute: false,
                  route: routes.iconFlag,
                  subRoutes: [],
                },
              ],
            },
    
            {
              menuValue: 'Forms',
              hasSubRoute: true,
              icon: 'edit',
              showSubRoute: false,
              route: routes.forms,
              subMenus: [
                {
                  menuValue: 'Basic Inputs',
                  hasSubRoute: false,
                  showSubRoute: false,
                  route: routes.formBasicInputs,
                  subRoutes: [],
                },
                {
                  menuValue: 'Input Groups',
                  hasSubRoute: false,
                  showSubRoute: false,
                  route: routes.formInputsGroups,
                  subRoutes: [],
                },
                {
                  menuValue: 'Horizontal Form',
                  hasSubRoute: false,
                  showSubRoute: false,
                  route: routes.formHorizontal,
                  subRoutes: [],
                },
                {
                  menuValue: 'Vertical Form',
                  hasSubRoute: false,
                  showSubRoute: false,
                  route: routes.formVertical,
                  subRoutes: [],
                },
                {
                  menuValue: 'Form Mask',
                  hasSubRoute: false,
                  showSubRoute: false,
                  route: routes.formMask,
                  subRoutes: [],
                },
                {
                  menuValue: 'Form Validation',
                  hasSubRoute: false,
                  showSubRoute: false,
                  route: routes.formValidation,
                  subRoutes: [],
                },
                {
                  menuValue: 'Form Select',
                  hasSubRoute: false,
                  showSubRoute: false,
                  route: routes.formSelect,
                  subRoutes: [],
                },
              ],
            },
    
            {
              menuValue: 'Table',
              hasSubRoute: true,
              icon: 'user',
              showSubRoute: false,
              route: routes.table,
              subMenus: [
                {
                  menuValue: 'Basic Tables',
                  hasSubRoute: false,
                  showSubRoute: false,
                  route: routes.basicTable,
                  subRoutes: [],
                },
                {
                  menuValue: 'Data Tables',
                  hasSubRoute: false,
                  showSubRoute: false,
                  route: routes.dataTable,
                  subRoutes: [],
                },
              ],
            },
          ],
        },
        {
          tittle: 'Settings',
          showAsTab: true,
          separateRoute: false,
          menu: [
            {
              menuValue: 'Settings',
              hasSubRoute: true,
              icon: 'settings',
              showSubRoute: false,
              route: routes.settings,
              subMenus: [
                {
                  menuValue: 'General Settings',
                  hasSubRoute: false,
                  showSubRoute: false,
                  route: routes.generalSettings,
                  subRoutes: [],
                },
                {
                  menuValue: 'Email Settings',
                  hasSubRoute: false,
                  showSubRoute: false,
                  route: routes.emailSettings,
                  subRoutes: [],
                },
                {
                  menuValue: 'Payment Settings',
                  hasSubRoute: false,
                  showSubRoute: false,
                  route: routes.paymentSettings,
                  subRoutes: [],
                },
                {
                  menuValue: 'Currency Settings',
                  hasSubRoute: false,
                  showSubRoute: false,
                  route: routes.currencySettings,
                  subRoutes: [],
                },
                {
                  menuValue: 'Group Permissions',
                  hasSubRoute: false,
                  showSubRoute: false,
                  route: routes.groupSettings,
                  subRoutes: [],
                },
                {
                  menuValue: 'Tax Rates',
                  hasSubRoute: false,
                  showSubRoute: false,
                  route: routes.taxRates,
                  subRoutes: [],
                },
              ],
            },
            {
              menuValue: 'Logout',
              hasSubRoute: false,
              icon: 'log-out',
              showSubRoute: false,
              route: routes.signIn,
              subMenus: [],
            },
          ],
        }, */
  ];
  public sidebarData2 = [
    {
      tittle: 'Main',
      hasSubRoute: true,
      icon: 'assets/img/icons/menu-icon.svg',
      showSubRoute: false,
      subRoutes: [
        {
          tittle: 'Dashboard',
          hasSubRoute: false,
          icon: 'assets/img/icons/dashboard.svg',
          showSubRoute: false,
          route: routes.dashboard,
          subRoutes: [],
        },
        {
          tittle: 'Product',
          hasSubRoute: true,
          icon: 'assets/img/icons/product.svg',
          showSubRoute: false,
          route: routes.product,
          subRoutes: [
            {
              tittle: 'Product List',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.productList,
              subRoutes: [],
            },
            {
              tittle: 'Add Product',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.addProduct,
              subRoutes: [],
            },
            {
              tittle: 'Category List',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.categoryList,
              subRoutes: [],
            },
            {
              tittle: 'Add Category',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.addCategory,
              subRoutes: [],
            },
            {
              tittle: 'Sub Category List',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.subCategoryList,
              subRoutes: [],
            },
            {
              tittle: 'Add Sub Category',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.addSubcategory,
              subRoutes: [],
            },
            {
              tittle: 'Brand List',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.brandList,
              subRoutes: [],
            },
            {
              tittle: 'Import Products',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.importProduct,
              subRoutes: [],
            },
            {
              tittle: 'Print Barcode',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.barcode,
              subRoutes: [],
            },
          ],
        },
        {
          tittle: 'Sales',
          hasSubRoute: true,
          icon: 'assets/img/icons/sales1.svg',
          showSubRoute: false,
          route: routes.sales,
          subRoutes: [
            {
              tittle: 'Sales List',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.salesList,
              subRoutes: [],
            },
            {
              tittle: 'POS',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.pos,
              subRoutes: [],
            },
            {
              tittle: 'New Sales',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.addSales,
              subRoutes: [],
            },
            {
              tittle: 'Sales Return List',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.salesReturnList,
              subRoutes: [],
            },
            {
              tittle: 'New Sales Return',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.createSalesReturn,
              subRoutes: [],
            },
          ],
        },

        {
          tittle: 'Purchase',
          hasSubRoute: true,
          icon: 'assets/img/icons/purchase1.svg',
          showSubRoute: false,
          route: routes.purchase,
          subRoutes: [
            {
              tittle: 'Purchase List',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.purchaseList,
              subRoutes: [],
            },
            {
              tittle: 'Add Purchase',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.addPurchase,
              subRoutes: [],
            },
            {
              tittle: 'Import Purchase',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.importPurchase,
              subRoutes: [],
            },
          ],
        },

        {
          tittle: 'Expense',
          hasSubRoute: true,
          icon: 'assets/img/icons/expense1.svg',
          showSubRoute: false,
          route: routes.expense,
          subRoutes: [
            {
              tittle: 'Expense List',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.expenseList,
              subRoutes: [],
            },
            {
              tittle: 'Add Expense',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.createExpense,
              subRoutes: [],
            },
            {
              tittle: 'Expense Category',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.expenseCategory,
              subRoutes: [],
            },
          ],
        },

        {
          tittle: 'Quotation',
          hasSubRoute: true,
          icon: 'assets/img/icons/quotation1.svg',
          showSubRoute: false,
          route: routes.quotation,
          subRoutes: [
            {
              tittle: 'Quotation List',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.quotationList,
              subRoutes: [],
            },
            {
              tittle: 'Add Quotation',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.addQuotation,
              subRoutes: [],
            },
          ],
        },

        {
          tittle: 'Transfer',
          hasSubRoute: true,
          icon: 'assets/img/icons/transfer1.svg',
          showSubRoute: false,
          route: routes.transfer,
          subRoutes: [
            {
              tittle: 'Transfer List',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.transferList,
              subRoutes: [],
            },
            {
              tittle: 'Add Transfer',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.addTransfer,
              subRoutes: [],
            },
            {
              tittle: 'Import Transfer',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.importTransfer,
              subRoutes: [],
            },
          ],
        },
        {
          tittle: 'Return',
          hasSubRoute: true,
          icon: 'assets/img/icons/return1.svg',
          showSubRoute: false,
          route: routes.return,
          subRoutes: [
            {
              tittle: 'Sales Return List',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.salesReturnList,
              subRoutes: [],
            },
            {
              tittle: 'Add Sales Return',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.createSalesReturn,
              subRoutes: [],
            },
            {
              tittle: 'Purchase Return List',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.purchaseReturnList,
              subRoutes: [],
            },
            {
              tittle: 'Add Purchase Return',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.createPurchaseReturn,
              subRoutes: [],
            },
          ],
        },

        {
          tittle: 'People',
          hasSubRoute: true,
          icon: 'assets/img/icons/users1.svg',
          showSubRoute: false,
          route: routes.people,
          subRoutes: [
            {
              tittle: 'Customer List',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.customerList,
              subRoutes: [],
            },
            {
              tittle: 'Add Customer',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.addCustomer,
              subRoutes: [],
            },
            {
              tittle: 'Supplier List',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.supplierList,
              subRoutes: [],
            },
            {
              tittle: 'Add Supplier',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.addSupplier,
              subRoutes: [],
            },
            {
              tittle: 'User List',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.userList,
              subRoutes: [],
            },
            {
              tittle: 'Add User',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.addUser,
              subRoutes: [],
            },
            {
              tittle: 'Store List',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.storeList,
              subRoutes: [],
            },
            {
              tittle: 'Add Store',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.addStore,
              subRoutes: [],
            },
          ],
        },

       
      ],
    },

    {
      tittle: 'Users',
      hasSubRoute: true,
      icon: 'assets/img/icons/users1.svg',
      showSubRoute: false,
      activeRoute: 'users',
      subRoutes: [
        {
          tittle: 'New User',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.newUser,
          subRoutes: [],
        },
        {
          tittle: 'User List',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.usersUserList,
          subRoutes: [],
        },
      ],
    },

    {
      tittle: 'Components',
      hasSubRoute: true,
      isSvg: true,
      icon: 'assets/img/icons/layers.svg',
      showSubRoute: false,
      subRoutes: [
        {
          tittle: 'Components',
          hasSubRoute: false,
          icon: 'assets/img/icons/layers.svg',
          showSubRoute: false,
          route: routes.components,
          subRoutes: [],
        },
        {
          tittle: 'Elements',
          hasSubRoute: true,
          icon: 'assets/img/icons/box.svg',
          showSubRoute: false,
          route: routes.element,
          subRoutes: [
            {
              tittle: 'Sweet Alerts',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.sweetAlerts,
              subRoutes: [],
            },
            {
              tittle: 'Tooltip',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.tooltip,
              subRoutes: [],
            },
            {
              tittle: 'Popover',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.popover,
              subRoutes: [],
            },
            {
              tittle: 'Ribbon',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.ribbon,
              subRoutes: [],
            },
            {
              tittle: 'Clipboard',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.clipboard,
              subRoutes: [],
            },
            {
              tittle: 'Drag & Drop',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.dragDrop,
              subRoutes: [],
            },
            {
              tittle: 'Range Slider',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.rangeSlider,
              subRoutes: [],
            },
            {
              tittle: 'Rating',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.rating,
              subRoutes: [],
            },
            {
              tittle: 'Toaster',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.toaster,
              subRoutes: [],
            },

            {
              tittle: 'Text Editor',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.textEditor,
              subRoutes: [],
            },
            {
              tittle: 'Counter',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.counter,
              subRoutes: [],
            },
            {
              tittle: 'Scrollbar',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.scrollbar,
              subRoutes: [],
            },
            {
              tittle: 'Spinner',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.spinner,
              subRoutes: [],
            },
            {
              tittle: 'Notification',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.notification,
              subRoutes: [],
            },
            {
              tittle: 'Lightbox',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.lightbox,
              subRoutes: [],
            },
            {
              tittle: 'Timeline',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.timeline,
              subRoutes: [],
            },
            {
              tittle: 'Form Wizard',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.formWizard,
              subRoutes: [],
            },
          ],
        },

        {
          tittle: 'Charts',
          hasSubRoute: true,
          icon: 'assets/img/icons/bar-chart-2.svg',
          showSubRoute: false,
          route: routes.charts,
          subRoutes: [
            {
              tittle: 'Apex Charts',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.chartApex,
              subRoutes: [],
            },
            {
              tittle: 'Ng2 Charts',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.chartNg2,
              subRoutes: [],
            },
            {
              tittle: 'Prime NG Charts',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.chartPrime,
              subRoutes: [],
            },
          ],
        },

        {
          tittle: 'Icons',
          hasSubRoute: true,
          icon: 'assets/img/icons/award.svg',
          showSubRoute: false,
          route: routes.icons,
          subRoutes: [
            {
              tittle: 'Fontawesome Icons',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.iconFontAwesome,
              subRoutes: [],
            },
            {
              tittle: 'Feather Icons',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.iconFeather,
              subRoutes: [],
            },
            {
              tittle: 'Ionic Icons',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.iconIonic,
              subRoutes: [],
            },
            {
              tittle: 'Material Icons',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.iconMaterial,
              subRoutes: [],
            },
            {
              tittle: 'Pe7 Icons',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.iconPe7,
              subRoutes: [],
            },
            {
              tittle: 'Simpleline Icons',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.iconSimpleline,
              subRoutes: [],
            },
            {
              tittle: 'Themify Icons',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.iconThemify,
              subRoutes: [],
            },
            {
              tittle: 'Weather Icons',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.iconWeather,
              subRoutes: [],
            },
            {
              tittle: 'Typicon Icons',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.iconTypicon,
              subRoutes: [],
            },
            {
              tittle: 'Flag Icons',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.iconFlag,
              subRoutes: [],
            },
          ],
        },

        {
          tittle: 'Forms',
          hasSubRoute: true,
          icon: 'assets/img/icons/columns.svg',
          showSubRoute: false,
          route: routes.forms,
          subRoutes: [
            {
              tittle: 'Basic Inputs',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.formBasicInputs,
              subRoutes: [],
            },
            {
              tittle: 'Input Groups',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.formInputsGroups,
              subRoutes: [],
            },
            {
              tittle: 'Horizontal Form',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.formHorizontal,
              subRoutes: [],
            },
            {
              tittle: 'Vertical Form',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.formVertical,
              subRoutes: [],
            },
            {
              tittle: 'Form Mask',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.formMask,
              subRoutes: [],
            },
            {
              tittle: 'Form Validation',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.formValidation,
              subRoutes: [],
            },
            {
              tittle: 'Form Select',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.formSelect,
              subRoutes: [],
            },
          ],
        },

        {
          tittle: 'Table',
          hasSubRoute: true,
          icon: 'assets/img/icons/layout.svg',
          showSubRoute: false,
          route: routes.table,
          subRoutes: [
            {
              tittle: 'Basic Tables',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.basicTable,
              subRoutes: [],
            },
            {
              tittle: 'Data Tables',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.dataTable,
              subRoutes: [],
            },
          ],
        },
        {
          tittle: 'Blank Page',
          hasSubRoute: false,
          icon: 'assets/img/icons/file.svg',
          showSubRoute: false,
          route: routes.blankPage,
          subRoutes: [],
        },
        {
          tittle: 'Error Pages',
          hasSubRoute: true,
          icon: 'assets/img/icons/alert-octagon.svg',
          showSubRoute: false,
          route: routes.errorPages,
          subRoutes: [
            {
              tittle: '404 Error',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.errorPage404,
              subRoutes: [],
            },
            {
              tittle: '500 Error',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.errorPage500,
              subRoutes: [],
            },
          ],
        },
      ],
    },

    {
      tittle: 'Application',
      hasSubRoute: true,
      icon: 'assets/img/icons/product.svg',
      showSubRoute: false,
      route: routes.application,
      subRoutes: [
        {
          tittle: 'Chat',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.chat,
          subRoutes: [],
        },
        {
          tittle: 'Calendar',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.calendar,
          subRoutes: [],
        },
        {
          tittle: 'Email',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.email,
          subRoutes: [],
        },
      ],
    },

    {
      tittle: 'Report',
      hasSubRoute: true,
      icon: 'assets/img/icons/time.svg',
      showSubRoute: false,
      route: routes.report,
      subRoutes: [
        {
          tittle: 'Purchase order report',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.purchaseOrderReport,
          subRoutes: [],
        },
        {
          tittle: 'Inventory Report',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.inventoryReport,
          subRoutes: [],
        },
        {
          tittle: 'Sales Report',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.salesReport,
          subRoutes: [],
        },
        {
          tittle: 'Invoice Report',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.invoiceReport,
          subRoutes: [],
        },
        {
          tittle: 'Purchase Report',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.purchaseReport,
          subRoutes: [],
        },
        {
          tittle: 'Supplier Report',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.supplierReport,
          subRoutes: [],
        },
        {
          tittle: 'Customer Report',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.customerReport,
          subRoutes: [],
        },
      ],
    },

    {
      tittle: 'Settings',
      hasSubRoute: true,
      icon: 'assets/img/icons/settings.svg',
      showSubRoute: false,
      route: routes.settings,
      subRoutes: [
        {
          tittle: 'General Settings',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.generalSettings,
          subRoutes: [],
        },
        {
          tittle: 'Email Settings',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.emailSettings,
          subRoutes: [],
        },
        {
          tittle: 'Payment Settings',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.paymentSettings,
          subRoutes: [],
        },
        {
          tittle: 'Currency Settings',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.currencySettings,
          subRoutes: [],
        },
        {
          tittle: 'Group Permissions',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.groupSettings,
          subRoutes: [],
        },
        {
          tittle: 'Tax Rates',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.taxRates,
          subRoutes: [],
        },
      ],
    },
  ];

}
