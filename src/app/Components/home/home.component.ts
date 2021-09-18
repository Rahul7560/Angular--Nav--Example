import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/Models/ProductList';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private productService : ProductsService ,private router : Router) {  }

  productList? : Product[];
  ngOnInit(): void {
    this.productService.getProductsLists()
    .subscribe((data) => {
      console.log(data);
      this.productList = data
    }
      )
  }

  ProductClick(productId : number){
      this.router.navigate (['/products',productId])
  }

}
