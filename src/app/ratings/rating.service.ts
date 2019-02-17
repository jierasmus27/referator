import { Rating } from '../shared/rating.model';
import { Subject } from 'rxjs';

export class RatingService {
  ratingAdded = new Subject<Rating[]>();

  private ratings: Rating[] = [
    new Rating(4.0, 1, 'He had an off day obviously'),
    new Rating(6.0, 1, 'A much better display')
  ];

  getRatings() {
    return this.ratings.slice();
  }

  addRating(rating: Rating) {
    this.ratings.push(rating);
    this.ratingAdded.next(this.getRatings());
  }

  addRatings(ratings: Rating[]) {
    this.ratings.push(...ratings);
    this.ratingAdded.next(this.getRatings());
  }
}
