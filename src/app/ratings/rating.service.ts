import { Rating } from '../shared/rating.model';
import { EventEmitter } from '@angular/core';

export class RatingService {
  ratingAdded = new EventEmitter<Rating[]>();

  private ratings: Rating[] = [
    new Rating(4.0, 1, 'He had an off day obviously'),
    new Rating(6.0, 1, 'A much better display')
  ];

  getRatings() {
    return this.ratings.slice();
  }

  addRating(rating: Rating) {
    this.ratings.push(rating);
    this.ratingAdded.emit(this.getRatings());
  }
}
