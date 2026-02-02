import { Component } from '@angular/core';
import { Product } from '../../interfaces/product';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  products: Product[] = [
    { id: 1, name: 'Laptop', price: 60000 },
    { id: 2, name: 'Phone', price: 30000 },
    { id: 3, name: 'Headphones', price: 3000 },
    { id: 4, name: 'Keyboard', price: 1500 },
    { id: 5, name: 'Mouse', price: 800 }
  ];

  constructor(public cartService: CartService) { }

  add(product: Product) {
    this.cartService.addToCart(product);
  }
}
