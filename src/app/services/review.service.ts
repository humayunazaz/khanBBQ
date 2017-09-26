import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class ReviewService {

  constructor(private db:AngularFireDatabase) { }
  add(review){
    return this.db.list('/reviews').push(review);
  }

  getAll(){
    return this.db.list('/reviews');
  }
}
