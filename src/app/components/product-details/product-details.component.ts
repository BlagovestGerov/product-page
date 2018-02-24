import { Component, OnInit, Input } from '@angular/core';
import { ProductModel } from '../../core/models/product';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProductService } from '../../core/services/product.service';
// import { ProductComponent } from '../product/product.component';



@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

    product: ProductModel
    productPrice: number
    // counterValue = 5
    counterValue = 1
    

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location
  ) { 
 
  }

  ngOnInit(): void {
    this.getProduct();
    
  }
  
  getProduct(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(Number(id))
      .subscribe(product => this.product = product);
  }

  customEvent(){
    let counter = this.counterValue
    let price = Number(this.product.price)
   this.productPrice = price*counter
  }

  goBack(): void {
    this.location.back();
  }

}
