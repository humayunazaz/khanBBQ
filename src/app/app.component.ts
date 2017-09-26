import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { DOCUMENT } from '@angular/platform-browser';
import { Inject} from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  host: {
    '(window:scroll)' : 'onScroll($event)'
  }
})
export class AppComponent {
  constructor(private auth:AuthService, private router:Router, private userService:UserService, @Inject(DOCUMENT) private document: Document) {
    auth.$user.subscribe(user => {
      if(user){
        this.userService.save(user);        
      }
    })
  }

  onScroll(event){
  }
}
