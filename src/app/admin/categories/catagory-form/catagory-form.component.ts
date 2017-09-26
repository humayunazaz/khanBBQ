import { AngularFireDatabase } from 'angularfire2/database';
import { CategoryService } from './../../../services/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-catagory-form',
  templateUrl: './catagory-form.component.html',
  styleUrls: ['./catagory-form.component.css']
})
export class CatagoryFormComponent implements OnInit {
  id;
  category = {};

  constructor(
    private route:ActivatedRoute,
    private cate:CategoryService,
    private router:Router,
    private db:AngularFireDatabase
  ) { 
    this.id = this.route.snapshot.paramMap.get('id');

    if(this.id){
      this.cate.getCate(this.id).take(1).subscribe(
        data => {
          this.category = data;
        }
      )
    }
  }
  save(form){
    if(this.id){
      this.cate.update(form, this.id);
    } else{
      this.cate.create(form);
    }
    this.router.navigate(['/admin/categories']);
  }

  delete(){
    if(confirm('Are you sure')){
      this.cate.delete(this.id);
      this.router.navigate(['/admin/categories']);
    }
  }
  ngOnInit() {
  }

}
