import { CategoryService } from './../../services/category.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataTableResource } from "angular-4-data-table";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit, OnDestroy {
  categories;
  tableResource: DataTableResource<any>;
  items: any[] = [];
  itemCount: number;
  subscription: Subscription;
  constructor(private cate:CategoryService) { }

  ngOnInit() {
    this.subscription = this.cate.getAll().subscribe(
      data => {
        this.categories = data;
        this.initializetionTable(data);
      }
    )
  }

  initializetionTable(category){
    this.tableResource = new DataTableResource(category);
    this.tableResource.query({offset: 0})
      .then(items => this.items = items); 
    this.tableResource.count()
      .then(count => this.itemCount = count);
  }

  reloadItems(event){
    if(!this.tableResource) return;


    this.tableResource.query(event)
      .then(items => this.items = items);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
