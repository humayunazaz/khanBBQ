import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {

  constructor() {
  }
  activeMenu = 'welcome';
  menus = [
    {name: 'welcome'},
    {name: 'about'},
    {name: 'pricing'},
    {name: 'featured'},
    {name: 'reviews'},
    {name: 'contact'},
    {name: 'give review', route: '/giveReview'}
  ]
  @Input() addReview = false;
  ngOnInit() {
  }

  slideTo(el){
    this.activeMenu = el;
    $('html, body').animate({
      scrollTop: $("#" + el).offset().top
  }, 2000);
  }
}
