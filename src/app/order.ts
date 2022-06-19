import {Product} from "./product";

export interface Order {
  quantity: number,
  fullPrice: number,
  product: Product
}
