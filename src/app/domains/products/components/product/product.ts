import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductModel } from '@products/models/product.model';
import { ReversePipe } from '@shared/pipes/reverse-pipe';
import { TimeAgoPipe } from '@shared/pipes/time-ago-pipe';

@Component({
  selector: 'app-product',
  imports: [CurrencyPipe, DatePipe, TimeAgoPipe],
  templateUrl: './product.html',
  //styleUrl: './product.css',
})
export class Product {
  @Input({required:true}) product!: ProductModel;

  @Output() addToCart = new EventEmitter();
  addToCartHandler() {
    console.log('Click from product');
    this.addToCart.emit(this.product);
  }
}
