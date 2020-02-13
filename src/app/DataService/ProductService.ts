import {Injectable} from '@angular/core'
import {IProduct} from '../Interfaces/Iproduct';

@Injectable()
export class ProductService
{
    getProducts():IProduct []
    {
        return[

            {
               productID:1, productName: "Police 25 mm", productDescription: "Police Watch", brand: "Police", updated: new Date(),CategoryId:1
                ,amount:100
                },
                {
                    productID:2,productName: "Fosil 35 mm", productDescription: "Fosil Watch", brand: "Fosil", updated: new Date(),CategoryId:1
                  ,amount:1000
              },
              {
                productID:3,productName: "Apple 35 mm", productDescription: "Apple Watch", brand: "Apple", updated: new Date(),CategoryId:2
                ,amount:100
            },
            {
                productID:4,productName: "Police new edition", productDescription: "police Watch", brand: "Police", updated: new Date(),CategoryId:2
                ,amount:200
            }
        ];
    }


    getProductsbyCategory(CategoryId?:number):IProduct []
    {

let products:IProduct[];

products=this.getProducts().filter(f=>f.CategoryId==CategoryId);
return products;
        
    }

    getProductDetails(productID?:number):IProduct
    {

let product:IProduct;

product=this.getProducts().filter(f=>f.productID==productID)[0];
return product;
}

}