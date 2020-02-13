import {Injectable} from '@angular/core'
import {ICategory} from '../Interfaces/ICategory';

@Injectable()
export class CategoryService
{
    getCategories():ICategory []
    {
        return[

            {CategoryDescription:"BLACK FRIDAY DEAL",Image:'https://placehold.it/150x80?text=IMAGE',CategoryId:1,CategoryName:'Grocery'},
            {CategoryDescription:"BLACK FRIDAY DEAL",Image:'https://placehold.it/150x80?text=IMAGE',CategoryId:2,CategoryName:'Daily Needs'},
            {CategoryDescription:"BLACK FRIDAY DEAL",Image:'https://placehold.it/150x80?text=IMAGE',CategoryId:3,CategoryName:'Fresh Fruits'},
            {CategoryDescription:"BLACK FRIDAY DEAL",Image:'https://placehold.it/150x80?text=IMAGE',CategoryId:4,CategoryName:'Milk'}
           
        ];
    }

}