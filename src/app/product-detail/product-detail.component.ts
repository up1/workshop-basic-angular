import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductDataModel} from '../product-list/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {

  pageName = 'Product detail';
  product: ProductDataModel;

  constructor(private route: ActivatedRoute, private router: Router) {
    console.log(route.snapshot.paramMap.get('id'));
    this.product = {
      code: 'AA 0001',
      name: 'Product name 1',
      price: 100,
      rating: 5,
      imageUrl: 'https://th-live-01.slatic.net/original/795870113fb003d6e781310596480060.jpg',
    };
  }

  onBack() {
    this.router.navigate(['/products']);
  }
}
