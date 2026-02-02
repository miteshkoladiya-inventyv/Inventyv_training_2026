import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
  import { CommonModule } from '@angular/common';
  import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  cart: any;
  total: any;
  
  constructor(private cartService: CartService) {
    this.cart = this.cartService.cart;
    this.total = this.cartService.totalAmount;
  }

  inc(id: number) {
    this.cartService.increase(id);
  }

  dec(id: number) {
    this.cartService.decrease(id);
  }

  remove(id: number) {
    this.cartService.remove(id);
  }

  clear() {
    this.cartService.clearCart();
  }
}
