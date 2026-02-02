import { Component, signal } from '@angular/core';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';


@Component({
  selector: 'app-root',
  imports: [ProductsComponent,CartComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('product-cart');
}
