import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'review-star',
  templateUrl: './review-star.component.html',
  styleUrls: ['./review-star.component.css']
})
export class ReviewStarComponent implements OnInit {

  constructor() { }
  stars = [1, 2, 3, 4, 5];
  addColor = false;
  colorNumber;
  @Input() edit = true;
  @Input() rate = 1;
  @Output() updateRating = new EventEmitter();

  ngOnInit() {
  }

  rating(star){
    this.rate = star;
    this.updateRating.emit(star);
  }

  hoverEffect(star){
    this.addColor = true;
    this.colorNumber = star;
  }

  endHover(){
    this.addColor = false;
    this.colorNumber = 0;
  }
}
