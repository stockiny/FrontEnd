export interface countries {
  CountryName?: number;
  Region?: string;
  isSelected?: boolean;
  isStatus?: boolean;
}
export interface expenseCategoryList {
  sNo?: number;
  Date?: number;
  Categoryname?: string;
  Reference?: string;
  Status?: string;
  Amount?: string;
  isSelected?: boolean;
  Description?: string;
}
export interface userList {
  sNo?: number;
  Username?: string;
  Phone?: string;
  email?: string;
  isSelected?: boolean;
  Role?: string;
  CreatedOn?: string;
  Status?: string;
}

export interface peopleUserList {
  sNo?: number;
  img?: string;
  Firstname?: string;
  Lastname?: string;
  Username?: string;
  Phone?: string;
  isSelected?: boolean;
  isStatus?: boolean;
  email?: string;
}

export interface transferList {
  sNo?: number;
  Date?: string;
  Reference?: string;
  isSelected?: boolean;
  From?: string;
  Paid?: string;
  items?: string;
  Grandtotal?: string;
  Status?: string;
}

export interface taxRates {
  sNo?: number;
  Taxname?: string;
  Tax?: string;
  isSelected?: boolean;
  isStatus?: boolean;
}

export interface paymentSettings {
  sNo?: number;
  PaymentTypeName?: string;
  isSelected?: boolean;
  isStatus?: boolean;
}

export interface groupPermission {
  sNo?: number;
  Role?: string;
  description?: string;
  Status?: string;
  isSelected?: boolean;
}

export interface currencySettings {
  sNo?: number;
  Currencyname?: string;
  Currencycode?: string;
  Currencysymbol?: string;
  isSelected?: boolean;
  isStatus?: boolean;
}

export interface salesreturnLists {
  sNo?: number;
  ProductName: string;
  Date: string;
  Customer: string;
  Status: string;
  GrandTotal: string;
  isSelected: boolean;
  Paid: string;
  Due: string;
  PaymentStatus: string;
  img: string;
}

export interface purchaseOrderReport {
  sNo?: number;
  img?: string;
  ProductName?: string;
  isSelected?: boolean;
  Purchasedamount?: string;
  PurchasedQTY?: string;
  InstockQTY?: string;
}

export interface invoiceReport {
  sNo?: number;
  Invoicenumber?: string;
  Customername?: string;
  isSelected?: boolean;
  Duedate?: string;
  Amount?: string;
  Paid?: string;
  Amountdue?: string;
  Status?: string;
}

export interface inventoryReport {
  sNo?: number;
  ProductName?: string;
  SKU?: string;
  Category?: string;
  isSelected?: boolean;
  Brand?: string;
  price?: string;
  Unit?: string;
  Instockqty?: string;
  img?: string;
}

export interface ListMarque {
  _id: any;
  sNo?: number;

  Photo?: string;
  Reference?: number;
  Libelle?: string;
  isSelected?: boolean;
}

export interface stateList {
  sNo?: number;
  StateName?: string;
  CountryName?: string;
  isSelected?: boolean;
  isStatus?: boolean;
}

export interface customerReport {
  sNo?: number;
  Customercode?: string;
  Customername?: string;
  isSelected?: boolean;
  Amount?: string;
  Paid?: string;
  Amountdue?: string;
  Status?: string;
  PaymentStatus?: string;
}

export interface quotationList {
  sNo?: number;
  ProductName?: string;
  Reference?: string;
  CustmerName?: string;
  isSelected?: boolean;
  Status?: string;
  GrandTotal?: string;
  img?: string;
}

export interface subcategoryList {
  sNo?: number;
  Image?: string;
  Category?: string;
  Parentcategory?: string;
  CategoryCode?: string;
  isSelected?: boolean;
  Description?: string;
  CreatedBy?: string;
}

export interface productList {
  _id: string;
  sNo?: number;
  ProductName?: string;
  SKU?: string;
  Category?: string;
  isSelected?: boolean;
  Brand?: string;
  price?: string;
  Unit?: string;
  Qty?: string;
  CreatedBy?: string;
  img?: string;
}
export interface categoryList {
  sNo?: number;
  img?: string;
  Categoryname?: string;
  CategoryCode?: string;
  isSelected?: boolean;
  Description?: string;
  CreatedBy?: string;
}
export interface Vente {
  _id? : string
  sNo?: number;
  Client: {
    _id: string;
    nom: string; 
    prenom: string;
   
    __v: number;
  };
  Etat?: string;
  isSelected?: boolean;
  DateSortie?: Date;
  CreatedBy?: string;
}


  export interface Model {
    _id?: string;
    sNo?: number;
    Reference?: string;
    Designation?: string;
    Categorie: {
      _id: string;
      description: string; 
      createdAt: string;
      updatedAt: string;
      __v: number;
    };
    Serie: {
      _id: string;
      Reference: string;
      Libelle: string;
      createdAt: string;
      updatedAt: string;
      __v: number;
    };
    Profiles?: Profile[];
    Vitrage?: Vitrage[];
    Accessoires?: Accessoire[];
    Autres?: Autre[];
    nbreOuvrant?: number;
    Photo?: string;
    createdAt?: Date;
    updatedAt?: Date;
    isSelected?: boolean;
  }


  export interface Profile {
    mp?: string; 
    debitage?: string;
    qte?: string;
    typeCadre?: 'DORMANT' | 'OUVRANT';
    coupe?: string;
    image?: string;
  }

  export interface Vitrage {
    mp?: string; 
    longeur?: string;
    hauteur?: string;
    qte?: string;
  }

  export interface Accessoire {
    _id: string;
    mp?: string[]; 
    qte?: string;
    Reference?: string;
    Designation?: string;
    Type?: string;
  }

  export interface Autre {
    mp?: string; 
    qte?: string;
  }


  export interface clientList {
    sNo?: number;
    nom?: string;
    prenom?: string;
    adresse?: string;
    cin?: string;
    delvirele?: Date;
    telephone?: string;
    email?: string;
    isSelected?: boolean;
    CreatedBy?: string;
  }
  
  export interface clientModel {
    _id?: any;
    sNo?: number;
    nom?: string;
    prenom?: string;
    adresse?: string;
    cin?: string;
    delvirele?: Date;
    telephone?: string;
    email?: string;
    isSelected?: boolean;
    CreatedBy?: string;
  }
export interface couleurList {
  sNo?: number;
  Desgination?: string;
  Reference?: string;
  isSelected?: boolean;
  CreatedBy?: string;
}
export interface fournisseurList {
  _id: string;
  sNo?: number;
  Adresse?: string;
  Email?: string;
  Telephone?: string;
  Fax?: boolean;
  MatriculFiscal?: string;
  Description?: string;
  Contact?: string;
  RaisonSocial?: string;
  isSelected?: boolean;
  CreatedBy?: string;
}
export interface MouvementStock {
  _id: string;
  sNo?: number;
  article?: string;
  Reference?: string;
  Designation?: string;
  quantiteInitiale?: boolean;
  quantiteVendue?: string;
  quantiteRestante?: string;
  isSelected?: boolean;
  CreatedBy?: string;

}

export interface CategoriesModel {
  _id?: any;
  sNo?: number;
  description?: string;
  Reference?: string;
  Libelle?: string;
  createdAt?: Date;
  isSelected?: boolean;

}
export interface CouleursModel {
  _id?: any;
  sNo?: number;
  Designation?: string;
  Reference?: string;
  createdAt?: Date;
  isSelected?: boolean;

}
export interface purchaseList {
  sNo?: number;
  SupplierName?: string;
  Reference?: string;
  Date?: string;
  Status?: string;
  GrandTotal?: string;
  isSelected?: boolean;
  Paid?: string;
  Due?: string;
  PaymentStatus?: string;
}
export interface salesList {
  sNo?: number;
  Date?: string;
  CustomerName?: string;
  isSelected?: boolean;
  Reference?: string;
  Status?: string;
  Payment?: string;
  Total?: string;
  Paid?: string;
  Due?: string;
  Biller?: string;
}

export interface purchaseReturnList {
  sNo?: number;
  Image?: string;
  Date?: string;
  Supplier?: string;
  isSelected?: boolean;
  Reference?: string;
  Status?: string;
  GrandTotal?: string;
  Paid?: string;
  Due?: string;
  PaymentStatus?: string;
}
export interface supplierList {
  sNo?: number;
  img?: string;
  SupplierName?: string;
  code?: string;
  isSelected?: boolean;
  Customer?: string;
  email?: string;
  Country?: string;
}
export interface storeList {
  sNo?: number;
  Storename?: string;
  Username?: string;
  Phone?: string;
  isSelected?: boolean;
  email?: string;
  isStatus?: boolean;
}
export interface salesReport {
  sNo?: number;
  ProductName?: string;
  SKU?: string;
  Category?: string;
  isSelected?: boolean;
  Brand?: string;
  Soldamount?: string;
  Soldqty?: string;
  Instockqty?: string;
  img?: string;
}
export interface customerList {
  sNo?: number;
  img?: string;
  CustomerName?: string;
  code?: string;
  Customer?: string;
  Phone?: string;
  email?: string;
  isSelected?: boolean;
  Country?: string;
}
export interface datatables {
  isSelected: boolean;
  sNo?: number;
  name?: string;
  position?: string;
  office?: string;
  age?: string;
  salary?: string;
  startdate?: string;
  id?: string;
}
export interface expenseList {
  sNo?: number;
  Categoryname?: string;
  Reference?: string;
  Date?: string;
  isSelected?: boolean;
  Status?: string;
  Amount?: string;
  Description?: string;
}
export interface purchaseReport {
  sNo?: number;
  img?: string;
  ProductName?: string;
  isSelected?: boolean;
  Purchasedamount?: string;
  PurchasedQTY?: string;
  InstockQTY?: string;
}
export interface Star {
  show?: boolean;
  half?: boolean;
}

export interface pos {
  Date?: string;
  Reference?: string;
  Customer?: string;
  Amount?: string;
}

export interface supplierReport {
  purchasedDate?: string;
  img?: string;
  Productname?: string;
  Purchasedamount?: string;
  purchasedQTY?: string;
  balance?: string;
  Status?: string;
  DATE?: string;
  Purchase?: string;
  Reference?: string;
  Suppliername?: string;
  isSelected?: boolean;
  Amount?: string;
  Paid?: string;
  paidby?: string;
  PaymentStatus?: string;
  Amountdue?: string;
}
export interface salesList {
  Date?: string;
  Reference?: string;
  Amount?: string;
  PaidBy?: string;
}
export interface subRoutes {
  tittle?: string;
  hasSubRoute?: boolean;
  icon?: string;
  showSubRoute?: boolean;
  route?: string;
  activeRoute?: string;
}
export interface ScheduleEvent {
  id?: string
  title?: string
  start?: string
}

export interface Permission {
  View: boolean;
  Create: boolean;
  Edit: boolean;
  Delete: boolean;
  ViewAllRecords: boolean;
  Barcode: boolean;
  SelectAll: boolean;
  Name: string
  details: string
  ImportProducts: string
  editpermission: string
}

