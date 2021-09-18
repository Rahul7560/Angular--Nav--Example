import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/Models/ProductList';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private router : Router , private  route : ActivatedRoute , private service  :ProductsService) {

   }
   productId  : number = 0 ;
   product? : Product  ;
   ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productId = id;
    this.service.getProduct(this.productId).subscribe(data => {
      this.product = data;
    })

    }

    getProductDetails(id : number):Observable<Product> {
      return this.service.getProduct(id)

    }

}
