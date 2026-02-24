import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CategoryModel } from '@products/models/category.model';

@Injectable({
  providedIn: 'root',
})
export class Categories {
  private apiUrl: string = 'https://api.escuelajs.co/api/v1/categories';
  private http = inject(HttpClient);
  categories!: CategoryModel[];
  getCategories() {
    return this.http.get<CategoryModel[]>(this.apiUrl);
  }
  getCategoryById(id: string) {
    return this.http.get<CategoryModel[]>(`${this.apiUrl}/${id}`);
  }
}
