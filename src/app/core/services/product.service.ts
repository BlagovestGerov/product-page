import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product';
import { PRODUCTS } from '../mock-products';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ProductService {

  constructor() { }


  getProducts(): Observable<ProductModel[]>{
    return of (PRODUCTS);
  }

  getProduct(id: number): Observable<ProductModel> {
    // Todo: send the message _after_ fetching the hero
    return of(PRODUCTS.find(product => product.id === id));
  }
}


