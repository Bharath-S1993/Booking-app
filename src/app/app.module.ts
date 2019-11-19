import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
<<<<<<< HEAD
import { environment } from 'src/environments/environment';
declare const firebase;
firebase.initializeApp(environment.firebase);
=======
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductAlertsComponent } from './components/product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { RouterModule } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { ShippingDetailsComponent } from './components/shipping-details/shipping-details.component';
import { HttpClientModule } from '@angular/common/http';


>>>>>>> functionality implemented
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot([{
      path: '',
      component: ProductListComponent
    }, {
      path: 'products/:productId',
      component: ProductDetailsComponent,
    }, {
      path: 'cart',
      component: CartComponent,
    }, {
      path: 'shipping-list',
      component: ShippingDetailsComponent,
    }
    ]),
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
