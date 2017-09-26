import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class CategoryService {

  constructor(private db:AngularFireDatabase) { }

  getAll(){
    return this.db.list('/categories');
  }

  getCate(id){
    return this.db.object('/categories/' + id);
  }

  create(cate){
    return this.db.list('/categories').push(cate);
  }

  update(cate, id){
    return this.db.object('/categories/' + id).update(cate);
  }

  delete(id){
    return this.db.object('/categories/' + id).remove();
  }

}
