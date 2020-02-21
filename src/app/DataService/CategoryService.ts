import {Injectable} from '@angular/core';
import {ICategory} from '../Interfaces/ICategory';
import {HttpClient} from '@angular/common/http';
import {Observable, observable} from 'rxjs';
import  'rxjs/operators';
import {  catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class CategoryService 
{

    constructor(private _http:HttpClient)
    {

    }

   
    getCategories(): Observable<ICategory []>
    {
        let data=this._http.get <ICategory []>("http://localhost:53669/api/Category/");
        
        

        return data;
        // .pipe(
        //     catchError(this.han <ICategory[]>('getCategories', []))
        //   );
        // .pipe(map((res:Response)=><ICategory[]> res.json())   )
         

        //     {CategoryDescription:"BLACK FRIDAY DEAL",Image:'https://placehold.it/150x80?text=IMAGE',CategoryId:1,CategoryName:'Grocery'},
        //     {CategoryDescription:"BLACK FRIDAY DEAL",Image:'https://placehold.it/150x80?text=IMAGE',CategoryId:2,CategoryName:'Daily Needs'},
        //     {CategoryDescription:"BLACK FRIDAY DEAL",Image:'https://placehold.it/150x80?text=IMAGE',CategoryId:3,CategoryName:'Fresh Fruits'},
        //     {CategoryDescription:"BLACK FRIDAY DEAL",Image:'https://placehold.it/150x80?text=IMAGE',CategoryId:4,CategoryName:'Milk'}
           
        // ];
    }

}