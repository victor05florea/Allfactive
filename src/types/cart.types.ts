//CartItem, Cart
import { Product } from "./product.types";

export interface CartItem extends Product {
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  totalPrice: number;
  totalQuantity: number;
}