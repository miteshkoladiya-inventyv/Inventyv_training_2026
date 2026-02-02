import { Injectable } from '@angular/core';
import { signal, computed } from '@angular/core';
import { Product , CartItem} from '../interfaces/product';


@Injectable({ providedIn: 'root' })
export class CartService {
  public cart = signal<CartItem[]>([]);

  totalAmount = computed(() =>
    this.cart().reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    )
  );

  addToCart(product: Product) {
    this.cart.update(items => {
      const existing = items.find(i => i.id === product.id);
      if (existing) {
        return items.map(i =>
          i.id === product.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...items, { ...product, quantity: 1 }];
    });
  }

  increase(id: number) {
    this.cart.update(items =>
      items.map(i =>
        i.id === id ? { ...i, quantity: i.quantity + 1 } : i
      )
    );
  }

  decrease(id: number) {
    this.cart.update(items =>
      items
        .map(i =>
          i.id === id ? { ...i, quantity: i.quantity - 1 } : i
        )
        .filter(i => i.quantity > 0)
    );
  }

  remove(id: number) {
    this.cart.update(items => items.filter(i => i.id !== id));
  }

  clearCart() {
    this.cart.set([]);
  }

  totalItems() {
    return this.cart().reduce((sum, item) => sum + item.quantity, 0);
  }
}
