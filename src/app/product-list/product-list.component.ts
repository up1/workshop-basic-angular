import { Component, OnInit } from '@angular/core';
import {ProductDataModel} from './product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',

  styles: ['thead {background: #337AB7; color: white}'],
  styleUrls: ['./product-list.component.css']

})
export class ProductListComponent implements OnInit {

  private _filterData: string;
  filteredProducts: ProductDataModel[];

  set filterData(value: string) {
    this._filterData = value;
    this.filteredProducts =
      this.filterData ?
        this.performFilter(this.filterData) : this.products;
  }

  get filterData(): string {
    return this._filterData;
  }

  constructor() {
    console.log(this.products);
    this.filteredProducts = this.products;
  }

  pageName = 'List of Product Page';
  imageWidth = 50;

  products: ProductDataModel[] = [
    {
      code: 'AA 0001',
      name: 'Product name 1',
      price: 100,
      rating: 5,
      imageUrl: 'https://th-live-01.slatic.net/original/795870113fb003d6e781310596480060.jpg',
    },
    {
      code: 'BB 0002',
      name: 'Product name 2',
      price: 2000,
      rating: 2,
      imageUrl: 'https://th-live-01.slatic.net/original/795870113fb003d6e781310596480060.jpg',
    },
    {
      code: 'BB 0003',
      name: 'Product name 3',
      price: 2000,
      rating: 3.5,
      imageUrl: 'https://th-live-01.slatic.net/original/795870113fb003d6e781310596480060.jpg',
    }
  ];

  isShowImage = true;

  ngOnInit(): void {
    console.log('Called ngOnInit');
  }

  toggleToShowProductImage() {
    this.isShowImage = !this.isShowImage;
  }


  private performFilter(filterBy: string) {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter(
      (p: ProductDataModel) => p.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }


  onRatingClicked(message: string) {
    this.pageName = `List of Product Page :: ${message}`;
  }
}
