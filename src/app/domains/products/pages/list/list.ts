import { Component, signal, WritableSignal } from '@angular/core';
import { Product } from '../../components/product/product';
import { Header } from '../../../shared/components/header/header';
import { ProductModel } from '../../models/product.model';
import { ProductCartModel } from '../../../shared/components/model/productCart.model';

@Component({
  selector: 'app-list',
  imports: [Product, Header],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List {
  products: WritableSignal<ProductModel[]> = signal<ProductModel[]>([]);
  cartProducts: WritableSignal<ProductCartModel[]> = signal<ProductCartModel[]>([]);

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
  text: WritableSignal<string> = signal('');
  fromChild(event: string) {
    console.log(event);
    this.text.update((text) => event);
  }
  addToCart(product: ProductModel) {
    this.cartProducts.update((previousList: ProductCartModel[]) => {
      // 1️⃣ Si la lista está vacía → agregar producto
      if (previousList.length === 0) {
        return [{ product, quantity: 1 }];
      }

      // 2️⃣ Buscar si el producto ya existe (mejor comparar por id)
      const existingProduct = previousList.find((p) => p.product.id === product.id);

      // 3️⃣ Si existe → aumentar cantidad
      if (existingProduct) {
        return previousList.map((p) =>
          p.product.id === product.id ? { ...p, quantity: p.quantity + 1 } : p,
        );
      }

      // 4️⃣ Si no existe → agregarlo con quantity 1
      return [...previousList, { product, quantity: 1 }];
    });
  }

}
