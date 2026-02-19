import { Component, inject, signal, WritableSignal } from '@angular/core';
import { Product } from '@products/components/product/product';
import { Header } from '@shared/components/header/header';
import { ProductModel } from '@products/models/product.model';
import { Cart } from '@shared/services/cart';
import { Products } from '@shared/services/products';

@Component({
  selector: 'app-list',
  imports: [Product, Header],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List {
  private cartService = inject(Cart);
  private productService = inject(Products)
  products: WritableSignal<ProductModel[]> = signal<ProductModel[]>([]);

  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: (products) =>{
        this.products.set(products);
      },
      error:()=>{

      }
    })
  }
  addToCart(product: ProductModel) {
    console.log('adding product')
    this.cartService.addToCart(product);
  }
}
