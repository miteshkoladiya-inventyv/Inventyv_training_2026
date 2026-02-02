import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CartComponent } from "./components/cart/cart.component";
import { ProductListComponent } from "./components/product/product.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CartComponent, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'product-cart';
}
