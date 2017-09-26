import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent implements OnInit {

  constructor(private auth:AuthService, private router:Router) { }

  logout(){
    this.auth.logout();
    this.router.navigate(['/']);
  }

  ngOnInit() {
  }

}
