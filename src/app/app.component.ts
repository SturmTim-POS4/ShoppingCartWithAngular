import {Component, OnInit} from '@angular/core';
import {Product} from "./product";
import {Order} from "./order";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ShoppingCartWithAngular';
  products: Product[] = [];
  orders: Order[] = []
  selectedProduct: Product = {productName: "Hammer", price: 5.99}
  quantity: number = 1;

  ngOnInit() {
    this.products.push(
      {productName: "Hammer", price: 5.99},
      {productName: "Eis", price: 1.50},
      {productName: "Schnitzelsemmel", price: 3.00},
      {productName: "Mario Kart 8 Deluxe", price: 59.99},
      {productName: "Handykastl", price: 0.99}
    )
    this.selectedProduct = this.products[0]
  }

  addOrder():void {
    this.orders.push({quantity: this.quantity, fullPrice: this.selectedProduct.price * this.quantity, product: this.selectedProduct})
  }
}
