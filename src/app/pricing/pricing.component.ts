import { MenusService } from './../services/menus.service';
import { CategoryService } from './../services/category.service';
import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import 'rxjs/add/operator/map';

@Component({
  selector: 'pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css'],
  animations: [
    trigger('price', [
      transition(':enter', [
        style({transform: 'translateY(-20px)', opacity: 0}),
        animate('1s ease-out')
      ])
    ])
  ]
})
export class PricingComponent implements OnInit {
  categories;
  products = [];
  activeCategory;
  filteredProducts = [];

  constructor(private cate:CategoryService, private prod:MenusService) { 
    this.cate.getAll().subscribe(
      data => {
        this.categories = data;
        this.activeCategory = this.categories[0].$key;
      }
    )
    this.prod.getAll().subscribe(
      data => {
        this.products = data;
        this.filterProducts();
      }
    )  
  }

  filterProducts(){
    this.filteredProducts = [];
    this.products.map(product => {
      if(product.category === this.activeCategory){
        this.filteredProducts.push(product);
      }
    });
  }
  ngOnInit() {
  }

  updateProducts(value){
    this.activeCategory = value;
    this.filterProducts();
  }
}
