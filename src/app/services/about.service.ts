import { Injectable } from '@angular/core';
import { AngularFireDatabase } from "angularfire2/database";

@Injectable()
export class AboutService {

  constructor(private af:AngularFireDatabase) { }

  getAbout(){
    return this.af.object('/about');
  }

}
