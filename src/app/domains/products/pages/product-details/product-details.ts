import { Component, inject, Input, signal, WritableSignal } from '@angular/core';
import { ProductModel } from '@products/models/product.model';
import { Products } from '@shared/services/products';
import { CurrencyPipe } from '@angular/common';
import { Cart } from '@shared/services/cart';

@Component({
  selector: 'app-product-details',
  imports: [CurrencyPipe],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {
  @Input() id?: string;
  private productService = inject(Products);
  private cartService = inject(Cart);
  product: WritableSignal<ProductModel | null> = signal<ProductModel | null>(null);
  cover: WritableSignal<string | null> = signal<string | null>(null);
  ngOnInit() {
    if (this.id)
      this.productService.getProductById(this.id).subscribe({
        next: (product) => {
          console.log(product);
          this.product.set(product);
          if (product.images.length > 0) {
            this.cover.set(product.images[0]);
          }
        },
        error: () => {},
      });
  }
  changeCover(newImage: string) {
    this.cover.set(newImage);
  }
  addToCart() {
    const product: ProductModel | null = this.product()
    if(product){
      this.cartService.addToCart(product);
    }
  }
}
