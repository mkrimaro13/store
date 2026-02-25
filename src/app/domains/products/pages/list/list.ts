import { Component, inject, Input, signal, SimpleChanges, WritableSignal } from '@angular/core';
import { Product } from '@products/components/product/product';
import { CategoryModel } from '@products/models/category.model';
import { ProductModel } from '@products/models/product.model';
import { Cart } from '@shared/services/cart';
import { Categories } from '@shared/services/categories';
import { Products } from '@shared/services/products';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-list',
  imports: [Product, RouterLinkWithHref],
  templateUrl: './list.html',
  //styleUrl: './list.css',
})
export class List {
  private cartService = inject(Cart);
  private productService = inject(Products);
  private categoryService = inject(Categories);
  @Input() category_id?: string;
  products: WritableSignal<ProductModel[]> = signal<ProductModel[]>([]);
  categories: WritableSignal<CategoryModel[]> = signal<CategoryModel[]>([]);

  private getProducts(category_id?: string) {
    this.productService.getProducts(category_id).subscribe({
      next: (products) => {
        this.products.set(products);
      },
      error: () => {},
    });
  }
  private getCategories() {
    this.categoryService.getCategories().subscribe({
      next: (categories) => {
        this.categories.set(categories);
      },
      error: () => {},
    });
  }
  ngOnInit() {
    this.getCategories();
  }
  ngOnChanges(changes: SimpleChanges) {
    this.getProducts(changes['category_id'].currentValue);
  }
  addToCart(product: ProductModel) {
    console.log('adding product');
    this.cartService.addToCart(product);
  }
}
