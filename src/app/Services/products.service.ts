import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

import { Product, ProductListing } from '../Models/ProductList';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(  private http:     HttpClient    ) { }

  ProductListUrl = "https://fakestoreapi.com/products";
  getProductsLists () : Observable<Product[]> {
    return this.http.get<any>(this.ProductListUrl)
  }


  getProduct(id:number):Observable<Product> {
    return this.http.get<Product>(this.ProductListUrl+'/'+id);
  }




}
