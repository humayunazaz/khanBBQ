import { CategoryService } from './../../../services/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MenusService } from './../../../services/menus.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-form',
  templateUrl: './menu-form.component.html',
  styleUrls: ['./menu-form.component.css']
})
export class MenuFormComponent implements OnInit {
  id;
  menus = {};
  $categories;

  constructor(
    private db:AngularFireDatabase,
    private menu:MenusService,
    private route:ActivatedRoute,
    private router:Router,
    private cate:CategoryService
  ) {
    this.id = this.route.snapshot.paramMap.get('id');

    if(this.id){
      this.menu.getMenu(this.id).take(1).subscribe(
        data => {
          this.menus = data;
        }
      )
    }

    this.$categories = this.cate.getAll();
  }

  save(form){
    if(form.feature == undefined){
      form.feature = false;
    }
    if(this.id){
      this.menu.update(form, this.id);
    } else{
      this.menu.create(form);
    }
    this.router.navigate(['/admin/menus']);
  }

  delete(){
    if(confirm('Are you sure')){
      this.menu.delete(this.id);
      this.router.navigate(['/admin/menus']);
    }
  }

  ngOnInit() {
  }

}
