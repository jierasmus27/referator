import { Component, OnInit } from '@angular/core';
import { Rating } from '../shared/rating.model';
import { RatingService } from './rating.service';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css'],
  providers: [RatingService]
})
export class RatingsComponent implements OnInit {
  private ratings: Rating[];

  constructor(private ratingService: RatingService) { }

  ngOnInit() {
    this.ratings = this.ratingService.getRatings();

    this.ratingService.ratingAdded.subscribe(
      (rating: Rating) => {
        this.addRating(rating);
      }
    );
  }

  addRating(rating: Rating) {
    this.ratings.push(rating);
  }
}
