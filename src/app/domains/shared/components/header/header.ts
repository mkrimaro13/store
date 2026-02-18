import {
  Component,
  Input,
  signal,
  SimpleChanges,
  WritableSignal,
} from '@angular/core';
import { ProductCartModel } from '../model/productCart.model';
@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  @Input({ required: true }) productsCartData: ProductCartModel[] = [];
  cartTotal: WritableSignal<number> = signal(0);
  isSideMenuVisible: WritableSignal<boolean> = signal(true);
  ngOnChanges(changes: SimpleChanges) {
    if (changes['productsCartData']) {
      this.cartTotal.set(this.getTotalPrice());
    }
  }
  toggleSideMenu(): void {
    this.isSideMenuVisible.update((previous: boolean) => !previous);

    if (!this.isSideMenuVisible()) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
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
