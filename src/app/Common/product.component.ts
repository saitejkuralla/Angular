import { Component,Output,EventEmitter } from '@angular/core';
import {ProductService} from '../DataService/ProductService';

import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../Interfaces/Iproduct';


@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  providers:[ProductService]
 
})

export class ProductComponent {
    Products : IProduct[];

    private  _activatedRoute:ActivatedRoute;
    private _productService:ProductService;

constructor(activatedRoute:ActivatedRoute,productService:ProductService)
{
this._activatedRoute=activatedRoute;
this._productService=productService;
}


ngOnInit()
{
 
 let categoryId:number=this._activatedRoute.snapshot.params['categoryID'];
 this.Products =this._productService.getProductsbyCategory(categoryId);
 console.log(this.Products);

}

    count :number=0;
    @Output()
    addToCartChangeEvent:EventEmitter<number>=new EventEmitter<number>();
    addToCartOnClick(){
      this.count= this.count+ 1;
     
this.addToCartChangeEvent.emit(this.count)
console.log("second"+this.count)
    }

    



  }