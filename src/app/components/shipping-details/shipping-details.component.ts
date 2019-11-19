import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shipping-details',
  templateUrl: './shipping-details.component.html',
  styleUrls: ['./shipping-details.component.css']
})
export class ShippingDetailsComponent implements OnInit {
  shippings: any = [];
  constructor(private cartSrv: CartService) { }

  ngOnInit() {
    this.loadShippingDetails();
  }

  loadShippingDetails() {

    this.shippings = this.cartSrv.getShippingDetails();
  }

}
