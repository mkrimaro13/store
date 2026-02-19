import { Component, inject, signal, WritableSignal } from '@angular/core';
import { Product } from '../../components/product/product';
import { Header } from '../../../shared/components/header/header';
import { ProductModel } from '../../models/product.model';
import { ProductCartModel } from '../../../shared/components/model/productCart.model';
import { Cart } from '../../../shared/services/cart';

@Component({
  selector: 'app-list',
  imports: [Product, Header],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List {
  private cartService = inject(Cart);
  products: WritableSignal<ProductModel[]> = signal<ProductModel[]>([]);

  ngOnInit() {
    const initialProducts: ProductModel[] = [
      {
        id: Date.now() + Math.random() * 100,
        createdAt: new Date().toLocaleString(),
        stock: Math.round(Math.random() * 25),
        title: 'Product 1',
        price: Math.round(Math.random() * 16000),
        image: 'https://picsum.photos/800.webp?random=' + Math.random() * 10,
      },
      {
        id: Date.now() + Math.random() * 100,
        createdAt: new Date().toLocaleString(),
        stock: Math.round(Math.random() * 25),
        title: 'Product 2',
        price: 15000,
        image: 'https://picsum.photos/800.webp?random=' + Math.random() * 10,
      },
      {
        id: Date.now() + Math.random() * 100,
        createdAt: new Date().toLocaleString(),
        stock: Math.round(Math.random() * 25),
        title: 'Product 3',
        price: Math.round(Math.random() * 16000),
        image: 'https://picsum.photos/800.webp?random=' + Math.random() * 10,
      },
      {
        id: Date.now() + Math.random() * 100,
        createdAt: new Date().toLocaleString(),
        stock: Math.round(Math.random() * 25),
        title: 'Product 4',
        price: Math.round(Math.random() * 16000),
        image: 'https://picsum.photos/800.webp?random=' + Math.random() * 10,
      },
      {
        id: Date.now() + Math.random() * 100,
        createdAt: new Date().toLocaleString(),
        stock: Math.round(Math.random() * 25),
        title: 'Product 5',
        price: Math.round(Math.random() * 16000),
        image: 'https://picsum.photos/800.webp?random=' + Math.random() * 10,
      },
      {
        id: Date.now() + Math.random() * 100,
        createdAt: new Date().toLocaleString(),
        stock: Math.round(Math.random() * 25),
        title: 'Product 6',
        price: Math.round(Math.random() * 16000),
        image: 'https://picsum.photos/800.webp?random=' + Math.random() * 10,
      },
      {
        id: Date.now() + Math.random() * 100,
        createdAt: new Date().toLocaleString(),
        stock: Math.round(Math.random() * 25),
        title: 'Product 7',
        price: Math.round(Math.random() * 16000),
        image: 'https://picsum.photos/800.webp?random=' + Math.random() * 10,
      },
      {
        id: Date.now() + Math.random() * 100,
        createdAt: new Date().toLocaleString(),
        stock: Math.round(Math.random() * 25),
        title: 'Product 8',
        price: Math.round(Math.random() * 16000),
        image: 'https://picsum.photos/800.webp?random=' + Math.random() * 10,
      },
      {
        id: Date.now() + Math.random() * 100,
        createdAt: new Date().toLocaleString(),
        stock: Math.round(Math.random() * 25),
        title: 'Product 9',
        price: Math.round(Math.random() * 16000),
        image: 'https://picsum.photos/800.webp?random=' + Math.random() * 10,
      },
      {
        id: Date.now() + Math.random() * 100,
        createdAt: new Date().toLocaleString(),
        stock: Math.round(Math.random() * 25),
        title: 'Product 10',
        price: Math.round(Math.random() * 16000),
        image: 'https://picsum.photos/800.webp?random=' + Math.random() * 10,
      },
      {
        id: Date.now() + Math.random() * 100,
        createdAt: new Date().toLocaleString(),
        stock: Math.round(Math.random() * 25),
        title: 'Product 11',
        price: Math.round(Math.random() * 16000),
        image: 'https://picsum.photos/800.webp?random=' + Math.random() * 10,
      },
      {
        id: Date.now() + Math.random() * 100,
        createdAt: new Date().toLocaleString(),
        stock: Math.round(Math.random() * 25),
        title: 'Product 12',
        price: Math.round(Math.random() * 16000),
        image: 'https://picsum.photos/800.webp?random=' + Math.random() * 10,
      },
    ];
    this.products.set(initialProducts);
  }
  addToCart(product: ProductModel) {
    console.log('adding product')
    this.cartService.addToCart(product);
  }
}
