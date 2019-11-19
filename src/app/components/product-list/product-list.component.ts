import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any = [];

  constructor() { }

  ngOnInit() {
    this.products = [
      { name: 'IPhone 4', details: 'Iphone 4 details', desc: 'IPhone 4 is a smart phone ', price: '300' },
      { name: 'Redmi Note 7 Pro', details: 'Redmi note 7 pro', desc: 'Redmi note 7 pro is a smart phone ', price: '800' },
      { name: 'IPhone X', details: 'IPhone X details', price: '900' },
    ]
  }

  onShare() {
    window.alert('Product details has been shared');
  }
  onNotify() {
    window.alert('This is to notify about the product whose price is greater than 700');
  }

}
