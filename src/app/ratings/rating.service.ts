import { Rating } from '../shared/rating.model';
import { Subject } from 'rxjs';

export class RatingService {
  ratingAdded = new Subject<Rating[]>();
  ratingEditing = new Subject<number>();

  private ratings: Rating[] = [
    new Rating(4.0, 1, 'He had an off day obviously'),
    new Rating(6.0, 1, 'A much better display')
  ];

  getRatings() {
    return this.ratings.slice();
  }

  getRating(index: number) {
    return this.ratings[index];
  }

  addRating(rating: Rating) {
    this.ratings.push(rating);
    this.ratingAdded.next(this.getRatings());
  }

  addRatings(ratings: Rating[]) {
    this.ratings.push(...ratings);
    this.ratingAdded.next(this.getRatings());
  }

  updateRating(index: number, rating: Rating) {
    this.ratings[index] = rating;
    this.ratingAdded.next(this.getRatings());
  }

  deleteRating(index: number) {
    this.ratings.splice(index, 1);
    this.ratingAdded.next(this.getRatings());
  }
}
