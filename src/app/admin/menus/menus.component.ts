import { DataTableResource } from 'angular-4-data-table';
import { Product } from './../../models/product';
import { Subscription } from 'rxjs/Subscription';
import { MenusService } from './../../services/menus.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit, OnDestroy {
  subscription:Subscription;
  products:Product[];
  tableResource: DataTableResource<Product>;
  items: Product[] = [];
  itemCount: number;

  constructor(private menus:MenusService) {
    this.subscription = this.menus.getAll().subscribe(
      data => {
        this.products = data;
        this.initializetionTable(data);
      }
    )
  }

  ngOnInit() {
  }

  initializetionTable(product: Product[]){
    this.tableResource = new DataTableResource(product);
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
