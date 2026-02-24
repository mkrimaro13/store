import { inject, Injectable } from '@angular/core';
import { ProductModel } from '@products/models/product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Products {
  private http = inject(HttpClient);
  private apiUrl: string = 'https://api.escuelajs.co/api/v1/products';
  products?: ProductModel[];
  getProducts(category_id?: string) {
    const url = new URL(this.apiUrl);
    if (category_id) {
      url.searchParams.set('categoryId', category_id);
    }
    return this.http.get<ProductModel[]>(url.toString());
  }
  getProductById(id: string) {
    return this.http.get<ProductModel>(`${this.apiUrl}/${id}`);
  }
}
