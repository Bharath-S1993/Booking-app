import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: any = []
  constructor(private httpSrv: HttpClient) { }

  addItem(product) {
    this.items.push(product);
    console.log(this.items);

  }

  getItems() {
    console.log(this.items);
    return this.items;
  }

  clearCart(): any {
    this.items = [];
    return this.items;
  }

  getShippingDetails() {
    return this.httpSrv.get('/assets/shipping-list.json');
  }


}
