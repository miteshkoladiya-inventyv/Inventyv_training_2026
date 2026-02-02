import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';  

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  constructor(public cartService: CartService) {}

  get cart() {
    return this.cartService.getCart();
  }

  get total() {
    return this.cartService.getTotal();
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
