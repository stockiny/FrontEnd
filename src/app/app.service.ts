import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  categoriesUrl: any;
  marqueUrl: any;

  couleurUrl: any;
  loginUrl: any;
  serieUrl: any;
  fournisseurUrl: any;
  matierepUrl: any;
  modelUrl: any;
  articleUrl: any;
  clientUrl: any;
  private currentUser: any; // store the current user
  devisUrl: any;
  venteUrl : any;

  constructor(private http: HttpClient) {
    this.categoriesUrl = environment.backendUrl + '/api/category';
    this.marqueUrl = environment.backendUrl + '/api/marque';
    this.couleurUrl = environment.backendUrl + '/api/couleur';
    this.loginUrl = environment.backendUrl + '/api/user';
    this.serieUrl = environment.backendUrl + '/api/serie';
    this.articleUrl = environment.backendUrl + '/api/article';

    this.fournisseurUrl = environment.backendUrl + '/api/fournisseur'
    this.modelUrl = environment.backendUrl + '/api/model'

    this.clientUrl = environment.backendUrl + '/api/client'

    this.devisUrl = environment.backendUrl + '/api/devis'
    this.venteUrl = environment.backendUrl + '/api/sortie'


  }



  getCategories(): Observable<any> {
    return this.http.get(`${this.categoriesUrl}/categories`)
  }

  addCategory(description: any, Libelle: any): Observable<any> {
    return this.http.post(`${this.categoriesUrl}/categories`, { description, Libelle }
    )
  }
  deteleCategory(id): Observable<any> {

    return this.http.delete(`${this.categoriesUrl}/categories/${id}`,)
  }
  getMarques(): Observable<any> {
    return this.http.get(`${this.marqueUrl}/marques`);
  }
  addMarque(data): Observable<any> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');

    return this.http.post(`${this.marqueUrl}/marques`, data
    )
  }

  deteleMarque(id): Observable<any> {

    return this.http.delete(`${this.marqueUrl}/marques/${id}`,)
  }

  getMarqueById(id): Observable<any> {
    return this.http.get(`${this.marqueUrl}/marques/${id}`);
  }

  editMarque(id, data): Observable<any> {
    return this.http.put(`${this.marqueUrl}/marques/${id}`, data);
  }

  getCouleurs(): Observable<any> {
    return this.http.get(`${this.couleurUrl}/couleurs`)
  }

  deleteCouleur(id): Observable<any> {
    return this.http.delete(`${this.couleurUrl}/couleurs/${id}`,)
  }
  addCouleur(Reference: any, Designation: any): Observable<any> {
    return this.http.post(`${this.couleurUrl}/couleurs`, { Reference, Designation }
    )
  }

  login(username: string, password: string): Observable<any> {
    const body = { username, password };
    return this.http.post(`${this.loginUrl}/login`, body)
      .pipe(
        tap((user: any) => {
          // Store the user information when logged in
          this.currentUser = user.user;
          localStorage.setItem('user', JSON.stringify(this.currentUser))
          console.log('Current User:', this.currentUser);
        }),
        catchError(error => {
          console.error('Login Error:', error);
          throw error; // rethrow the error
        })
      );
  }

  getCurrentUser(): any {
    // Return the current user information
    return this.currentUser;
  }
  updateCouleur(id: string, data: any): Observable<any> {
    return this.http.put(`${this.couleurUrl}/couleurs/${id}`, data);
  }
  getCouleurById(couleurId: string): Observable<any> {
    return this.http.get(`${this.couleurUrl}/couleurs/${couleurId}`);
  }



  getSeries(): Observable<any> {
    return this.http.get(`${this.serieUrl}/series`);
  }

  addSerie(Reference: any, Libelle: any): Observable<any> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');

    return this.http.post(`${this.serieUrl}/series`, { Reference, Libelle }
    )
  }

  deteleSerie(id): Observable<any> {

    return this.http.delete(`${this.serieUrl}/series/${id}`,)
  }

  getSerieById(id): Observable<any> {
    return this.http.get(`${this.marqueUrl}/marques/${id}`);
  }

  editSerie(id, data): Observable<any> {
    return this.http.put(`${this.marqueUrl}/marques/${id}`, data);
  }
  addFourniseur(Adresse, Email, Telephone, Fax, MatriculFiscal, Description, Contact, RaisonSocial): Observable<any> {
    return this.http.post(`${this.fournisseurUrl}/fournisseurs`, { Adresse, Email, Telephone, Fax, MatriculFiscal, Description, Contact, RaisonSocial }
    )
  }

  getFournisseurs(): Observable<any> {
    return this.http.get(`${this.fournisseurUrl}/fournisseurs`)
  }
  deteleFournisseur(id): Observable<any> {

    return this.http.delete(`${this.fournisseurUrl}/fournisseurs/${id}`,)
  }

  updatePrices(data): Observable<any> {
    return this.http.post(`${this.matierepUrl}/updatePrices`, data
    )
  }

  getArticles(): Observable<any> {
    return this.http.get(`${this.articleUrl}/articles`);
  }

  addVente(data): Observable<any> {
    return this.http.post(`${this.venteUrl}/sorties`,data);
  }
  getAllVentes(): Observable<any> {
    return this.http.get(`${this.venteUrl}/sorties`);
  }
  deteleVente(id): Observable<any> {
    return this.http.delete(`${this.venteUrl}/sorties/${id}`,)
  }
  
  

  getArticleById(id): Observable<any> {
    return this.http.get(`${this.articleUrl}/articles/${id}`);
  }
  deteleArticle(id): Observable<any> {

    return this.http.delete(`${this.articleUrl}/articles/${id}`,)
  }
  getArticleByType(type): Observable<any> {
    return this.http.get(`${this.articleUrl}/articlesByType/${type}`);
  }

  //model

  addArticles(data): Observable<any> {
    return this.http.post(`${this.articleUrl}/articles`, data
    )
  }

  deleteModel(id): Observable<any> {
    return this.http.delete(`${this.modelUrl}/models/${id}`);
  }
  getModeltDetail(id: string): Observable<any> {
    return this.http.get(`${this.modelUrl}/models/${id}`);
  }

  addClient(nom, prenom, adresse, cin, delvirele, telephone, email): Observable<any> {
    return this.http.post(`${this.clientUrl}/clients`, { nom, prenom, adresse, cin, delvirele, telephone, email });
  }

  getAllClients(): Observable<any> {
    return this.http.get(`${this.clientUrl}/clients`);
  }

  getClientById(id): Observable<any> {
    return this.http.get(`${this.clientUrl}/clients/${id}`);
  }


  deleteClient(id): Observable<any> {
    return this.http.delete(`${this.clientUrl}/clients/${id}`);
  }

  //devis
  getDevisById(id): Observable<any> {
    return this.http.get(`${this.devisUrl}/devis/${id}`);
  }


  getModels(): Observable<any> {
    return this.http.get(`${this.modelUrl}/models`);
  }


  addDevis(data): Observable<any> {
    return this.http.post(`${this.devisUrl}/devis`, data
    )
  }
}
