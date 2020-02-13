import { Component,OnInit } from '@angular/core';
import {ICategory} from './Interfaces/ICategory';
import {CategoryService} from './DataService/CategoryService';


@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  providers:[CategoryService]
 
})

export class CategoryComponent implements OnInit{
    categories : ICategory[];
          
    private _categoryService:CategoryService;
    constructor(categoryService:CategoryService) {  
        
        this._categoryService=categoryService;
       
       
      }
      ngOnInit()
      {
        this.categories=this._categoryService.getCategories();
      }

  }