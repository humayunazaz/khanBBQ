import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user;
  constructor(private auth:AuthService, private router:Router) {
    this.auth.$user.subscribe(
      user => {
        if(user){
          this.user = user;
          this.router.navigate(['/admin']);
        }
      }
    )
  }

  login(){
    this.auth.login();
  }

  ngOnInit() {
    
  }

}
