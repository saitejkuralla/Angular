import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule,Route, Routes } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EmpComponent } from './Employee/employee.component';
import { HeaderComponent } from './common/header.component';
import { FooterComponent } from './common/footer.component';
import { ContainerComponent } from './mainContainer.component';
import { ProductComponent } from './Common/product.component';

import { GridComponent } from './Common/grid.component';
import { ProductsComponent } from './Admin/products.component';
import { CountComponent } from './Common/count.component';
import { CategoryComponent } from './category.component';

import {ProductViewComponent} from './Products/ProductsView.Component';

const appRoutes:Routes=[
{path:'products',component:ProductComponent},
{path:'home',component:CategoryComponent},
{path:'categoryDetails/:categoryID',component:ProductComponent},
{path:'productDetails/:productID',component:ProductViewComponent}

];


@NgModule({
  declarations: [
    AppComponent,EmpComponent,HeaderComponent,FooterComponent,ContainerComponent,ProductComponent,
    GridComponent,ProductsComponent,CountComponent,CategoryComponent,ProductViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
