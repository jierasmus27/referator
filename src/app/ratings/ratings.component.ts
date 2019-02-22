import { Component, OnInit, OnDestroy } from '@angular/core';
import { Rating } from '../shared/rating.model';
import { RatingService } from './rating.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css']
})
export class RatingsComponent implements OnInit, OnDestroy {
  private ratings: Rating[];
  private subscription: Subscription;

  constructor(private ratingService: RatingService) { }

  ngOnInit() {
    this.ratings = this.ratingService.getRatings();

    this.subscription = this.ratingService.ratingAdded.subscribe(
      (ratings: Rating[]) => {
        this.ratings = ratings;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onEditItem(index: number) {
    this.ratingService.ratingEditing.next(index);
  }
}
