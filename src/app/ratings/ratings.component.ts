import { Component, OnInit } from '@angular/core';
import { Rating } from '../shared/rating.model';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css']
})
export class RatingsComponent implements OnInit {
  ratings: Rating[] = [
    new Rating(4.0, 1, 'He had an off day obviously'),
    new Rating(6.0, 1, 'A much better display')
  ];

  constructor() { }

  ngOnInit() {
  }

  addRating(rating: Rating) {
    this.ratings.push(rating);
  }

}
