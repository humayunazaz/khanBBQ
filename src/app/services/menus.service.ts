import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class MenusService {

  constructor(private db:AngularFireDatabase) { }

  getAll(){
    return this.db.list('/menus');
  }

  getMenu(id){
    return this.db.object('/menus/' + id);
  }

  create(menu){
    return this.db.list('/menus').push(menu);
  }

  update(menu, id){
    return this.db.object('/menus/' + id).update(menu);
  }

  delete(id){
    return this.db.object('/menus/' + id).remove();
  }
}
