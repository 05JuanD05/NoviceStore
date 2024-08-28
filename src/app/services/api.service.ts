import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interfaz/itemProduct';
import { APIStore } from '../api/apiStore';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any>{
    return this.http.get<Product>(this.apiUrl);
  }

  getCategories(): Observable<string[]>{
    return this.http.get<string[]>('https://fakestoreapi.com/products/categories');
  }

  getProductById(id: number): Observable<APIStore>{
    const url= `https://fakestoreapi.com/products/${id}`;
    return this.http.get<APIStore>(url);
  }

  getProductByCategories(categories: string): Observable<APIStore[]>{
    const url = `https://fakestoreapi.com/products/category/${categories}`;
    return this.http.get<APIStore[]>(url);
  }
}
