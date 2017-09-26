import { ReviewService } from './../services/review.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  constructor(private review:ReviewService) { }
  reviews;
  ngOnInit() {
    this.review.getAll().subscribe(
      data => {
        this.reviews = data;
        this.reviews.reverse();
      }
    )
  }

} 
