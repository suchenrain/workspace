import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'inventory-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Array<Product>;

  constructor() {
    this.products = [
      new Product(
        'MYSHOES',
        'Black running shoes',
        '../assets/images/products/black-shoes.jpg',
        ['Men', 'Shoes', 'Runing Shoes'],
        109.99),
      new Product(
        'MYSHOES',
        'Black running shoes',
        '../assets/images/products/black-shoes.jpg',
        ['Men', 'Shoes', 'Runing Shoes'],
        109.99),
      new Product(
        'MYSHOES',
        'Black running shoes',
        '../assets/images/products/black-shoes.jpg',
        ['Men', 'Shoes', 'Runing Shoes'],
        109.99)
    ]
  }


  productWasSelected(product: Product) {
    console.log(`Product Selected:${product}`);
  }
}
