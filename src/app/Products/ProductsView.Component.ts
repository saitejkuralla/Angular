import { Component } from '@angular/core';
import {ProductService} from '../DataService/ProductService';

import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../Interfaces/Iproduct';



@Component({
    selector: 'Products-View',
    templateUrl: './ProductsView.Component.html',
    styleUrls: ['./ProductsView.Component.css'],
    providers:[ProductService]
 
})

export class ProductViewComponent{

    productDetails:IProduct;
    private _activatedRoute:ActivatedRoute;
    private _productService:ProductService;
    constructor(activatedRoute:ActivatedRoute,productService:ProductService) {  
           this._activatedRoute=activatedRoute;
           this._productService=productService;
           
           
      }
   
      ngOnInit()
{
   
    let productID:number=this._activatedRoute.snapshot.params['productID'];
    debugger;
    console.log(productID);
    this.productDetails= this._productService.getProductDetails(productID);
   console.log(this.productDetails);
}


  }