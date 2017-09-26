import { Router } from '@angular/router';
import { ReviewService } from './../services/review.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-give-review',
  templateUrl: './give-review.component.html',
  styleUrls: ['./give-review.component.css']
})
export class GiveReviewComponent implements OnInit {
  rating = 0;
  constructor(private reviewService:ReviewService, private router:Router) { }
  rateUpdate(event){
    this.rating = event;
  }

  save(form){
    if(this.rating == 0){
      this.rating = 5;
    }
    form['rating'] = this.rating;
    this.reviewService.add(form);
    this.router.navigate(['/']);
  }
  ngOnInit() {
  }

}
