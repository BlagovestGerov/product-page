import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AlertModule } from 'ngx-bootstrap';
import { InputCounterComponent } from 'angular2-input-counter';


import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import {AppRoutesModule} from './app-routing.module';
import { ContactComponent } from './components/contact/contact.component';
import { ProductService } from './core/services/product.service';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { NgxSmartModalModule, NgxSmartModalService } from 'ngx-smart-modal';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    NavbarComponent,
    InputCounterComponent,
    ContactComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutesModule,
    NgxSmartModalModule.forRoot(),
    AlertModule.forRoot()
  ],
  providers: [ProductService, NgxSmartModalService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
