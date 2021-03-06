import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  @Input('product') pro: any;
  @Output() notify = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onNotify() {
    console.log(this.notify);

  }


}
