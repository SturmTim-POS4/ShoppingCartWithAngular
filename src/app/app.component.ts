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
  sum: number = 0;
  discount: number = 0;

  ngOnInit() {
    this.products.push(
      {productName: "Hammer", price: 29.99},
      {productName: "Eis", price: 1.50},
      {productName: "Schnitzelsemmel", price: 5.00},
      {productName: "Mario Kart 8 Deluxe", price: 59.99},
      {productName: "Handykastl", price: 19.99},
      {productName: "Sklaven", price: 99.99}
    )
    this.selectedProduct = this.products[0]
  }

  addOrder() {
    this.orders.push({quantity: this.quantity, fullPrice: this.selectedProduct.price * this.quantity, product: this.selectedProduct})
    this.refreshSum()
  }

  refreshSum(){
    this.sum = this.orders.reduce((sum, currentValue) => {return sum + currentValue.fullPrice}, 0)
    if(this.sum >= 100){
      this.discount = 10;
    }
  }

  deleteOrder(order: Order){
    this.orders.splice(this.orders.indexOf(order), 1)
  }


}
