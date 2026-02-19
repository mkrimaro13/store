import { ProductModel } from '@products/models/product.model';

export interface ProductCartModel {
  product: ProductModel;
  quantity: number;
}
