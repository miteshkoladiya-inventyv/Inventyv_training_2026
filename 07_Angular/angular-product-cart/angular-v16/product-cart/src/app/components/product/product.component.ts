import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../interfaces/product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  products: Product[] = [
    { id: 1, name: 'Laptop', price: 60000 },
    { id: 2, name: 'Phone', price: 30000 },
    { id: 3, name: 'Headphones', price: 3000 },
    { id: 4, name: 'Keyboard', price: 1500 },
    { id: 5, name: 'Mouse', price: 800 }
  ];

  constructor(public cartService: CartService) {}

  add(product: Product) {
    this.cartService.addToCart(product);
  }
}
