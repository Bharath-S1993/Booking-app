import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: any;
  checkoutForm: any;
  constructor(private cartSrv: CartService,
    private formBuilder: FormBuilder, ) { }

  ngOnInit() {

    this.items = this.cartSrv.getItems();
    this.items = [...this.items];
    console.log(this.items);
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    })
  }

  onSubmit(value) {
    console.warn("Your order has been submited", value);
    this.items = this.cartSrv.clearCart();
    this.checkoutForm.reset();

  }

}
