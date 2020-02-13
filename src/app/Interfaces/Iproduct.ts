export interface IProduct { 
    productID:number,
    productName:string;
    productDescription:string;
    brand:string;
    updated:Date;
    CategoryId?:number;
    amount?:number;
 } 