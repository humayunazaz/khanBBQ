import { MenusService } from './../services/menus.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';

@Component({
  selector: 'featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {
  featured = [];

  constructor(private menu:MenusService) {
    this.menu.getAll().subscribe(
      data => {
        this.featured = [];
        data.map(d => {
          if(d.feature){
            this.featured.push(d);
          }
        })
      }
    )
  }

  ngOnInit() {
  }

}
