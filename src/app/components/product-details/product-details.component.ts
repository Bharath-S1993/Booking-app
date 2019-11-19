import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: any = {};
  products: any;
  constructor(private router: ActivatedRoute,
    private cartSrv: CartService) { }

  ngOnInit() {
    this.products = [
      { name: 'IPhone 4', details: 'Iphone 4 details', desc: 'IPhone 4 is a smart phone ', price: '300' },
      { name: 'Redmi Note 7 Pro', details: 'Redmi note 7 pro', desc: 'Redmi note 7 pro is a smart phone ', price: '800' },
      { name: 'IPhone X', details: 'IPhone X details', price: '900' },
    ]
    this.router.paramMap.subscribe((param) => {
      this.product = this.products[param.get('productId')]
    })
  }

  onAddToCart() {
    window.alert('Product has been added top cart');
    console.log(this.product);
    this.cartSrv.addItem(this.product);
  }

}
