import { AboutService } from './../services/about.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about-us',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  about;
  constructor(private aboutService:AboutService) {
 
  }

  ngOnInit() {
    this.aboutService.getAbout().subscribe(
      data => {
        this.about = data;
      }
    )
  }

}
