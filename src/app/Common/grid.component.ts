import { Component,OnInit } from '@angular/core';

import {IProduct} from '../Interfaces/Iproduct';

import {ProductService} from '../DataService/ProductService'

@Component({
    selector: 'myGrid',
    templateUrl: './grid.component.html',
    providers:[ProductService]

})


export class GridComponent implements OnInit {

    Products:IProduct[];
  private _productService:ProductService
constructor(productService: ProductService)
{
    this._productService=productService;
    
}
ngOnInit()
{
    this.Products=this._productService.getProducts();
}
selectedProductCountRadioButton:string="All"

onProductCountChange(selectedValue:string):void{
    console.log(selectedValue)
this.selectedProductCountRadioButton=selectedValue;
}
    getCountOfProducts(): number {
      return this.Products.length;
       
    }

    getCountOfPoliceBrandCount(): number {
        return this.Products.filter(e=>e.brand=="Police").length;
         
      }
}