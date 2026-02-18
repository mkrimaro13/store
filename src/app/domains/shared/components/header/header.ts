import { Component, Input, signal, WritableSignal } from '@angular/core';
import { ProductModel } from '../../../products/models/product.model';
import { ProductCartModel } from '../model/productCart.model';
@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  @Input({ required: true }) productsCartData: ProductCartModel[] = [];
  isSideMenuVisible: WritableSignal<boolean> = signal(true);
  toggleSideMenu(): void {
    this.isSideMenuVisible.update((previous: boolean) => !previous);
  }
  getTotalPrice(): number {
    return this.productsCartData
      .map((p) => p.product.price * p.quantity)
      .reduce((prev, current) => prev + current, 0);
  }
  removeFromCart(id: number): void {
    this.productsCartData = this.productsCartData
      .map((p) => (p.product.id === id ? { ...p, quantity: p.quantity - 1 } : p))
      .filter((p) => p.quantity > 0);
  }
}
