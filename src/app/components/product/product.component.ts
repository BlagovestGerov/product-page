import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../../core/mock-products';
import { ProductModel } from '../../core/models/product'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products = PRODUCTS;
  constructor() { }

  ngOnInit() {
  }

}
