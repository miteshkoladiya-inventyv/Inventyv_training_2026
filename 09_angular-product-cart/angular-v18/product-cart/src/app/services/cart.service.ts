import { Injectable } from '@angular/core';
import { Product, CartItem } from '../interfaces/product';

@Injectable({ providedIn: 'root' })
export class CartService {

  private cart: CartItem[] = [];

  getCart(): CartItem[] {
    return this.cart;
  }

  getTotal(): number {
    return this.cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }

  addToCart(product: Product) {
    const existing = this.cart.find(i => i.id === product.id);
    if (existing) {
      existing.quantity++;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
  }

  increase(id: number) {
    const item = this.cart.find(i => i.id === id);
    if (item) item.quantity++;
  }

  decrease(id: number) {
    const item = this.cart.find(i => i.id === id);
    if (!item) return;

    item.quantity--;
    if (item.quantity === 0) {
      this.remove(id);
    }
  }

  remove(id: number) {
    this.cart = this.cart.filter(i => i.id !== id);
  }

  clearCart() {
    this.cart = [];
  }

  totalItems(): number {
    return this.cart.reduce((sum, item) => sum + item.quantity, 0);
  }
}
