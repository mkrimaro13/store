import { computed, Injectable, signal, WritableSignal } from '@angular/core';
import { ProductCartModel } from '../components/model/productCart.model';
import { ProductModel } from '../../products/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class Cart {
  cart: WritableSignal<ProductCartModel[]> = signal<ProductCartModel[]>([]);
  total = computed(() => {
    return this.cart()
      .map((p) => p.product.price * p.quantity)
      .reduce((prev, current) => prev + current, 0);
  });
  addToCart(product: ProductModel) {
    this.cart.update((previousList: ProductCartModel[]) => {
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
      console.log('Product Added');
      // 4️⃣ Si no existe → agregarlo con quantity 1
      return [...previousList, { product, quantity: 1 }];
    });
  }
  removeFromCart(id: number): void {
    this.cart.update((previous) =>
      previous
        .map((p) => (p.product.id === id ? { ...p, quantity: p.quantity - 1 } : p))
        .filter((p) => p.quantity > 0),
    );
  }
}
