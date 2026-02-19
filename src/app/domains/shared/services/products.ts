import { inject, Injectable } from '@angular/core';
import { ProductModel } from '../../products/models/product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Products {
  private http = inject(HttpClient);
  products?: ProductModel[];
  getProducts(){
    return this.http.get<ProductModel[]>('https://api.escuelajs.co/api/v1/products');
  }
}
