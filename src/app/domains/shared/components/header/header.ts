import { Component, inject, Signal, signal, WritableSignal } from '@angular/core';
import { ProductCartModel } from '@shared/components/model/productCart.model';
import { Cart } from '@shared/services/cart';
@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  //styleUrl: './header.css',
})
export class Header {
  private cartService = inject(Cart);
  cart: WritableSignal<ProductCartModel[]> = this.cartService.cart;
  total: Signal<number> = this.cartService.total;
  isSideMenuVisible: WritableSignal<boolean> = signal(true);
  toggleSideMenu(): void {
    this.isSideMenuVisible.update((previous: boolean) => !previous);

    if (!this.isSideMenuVisible()) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }
  removeFromCart(id: number) {
    this.cartService.removeFromCart(id);
  }
}
