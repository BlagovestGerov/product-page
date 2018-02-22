import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../../core/mock-products';
import { ProductModel } from '../../core/models/product'
import { ProductService } from '../../core/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products : ProductModel[];


  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts()
  }

  getProducts(): void {
    this.productService.getProducts()
    .subscribe(products => this.products = products )
  }

  // onSelect(product: ProductModel): void {
  //   this.selectedProduct = product;
  // }

}
