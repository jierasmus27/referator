import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Rating } from 'src/app/shared/rating.model';
import { RatingService } from '../rating.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-rating-edit',
  templateUrl: './rating-edit.component.html',
  styleUrls: ['./rating-edit.component.css']
})
export class RatingEditComponent implements OnInit, OnDestroy {
  @ViewChild('frm') ratingsForm: NgForm;
  private ratingSubscription: Subscription;
  private editMode = false;
  private editedItemIndex: number;
  private editedRating: Rating;

  constructor(private ratingService: RatingService) { }

  ngOnInit() {
    this.ratingSubscription =
      this.ratingService.ratingEditing.subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedRating = this.ratingService.getRating(index);

          this.ratingsForm.setValue({
            name: this.editedRating.referee_id,
            rating: this.editedRating.rating,
            comment: this.editedRating.comment
          });
        }
      )
  }

  addRating(ratingsForm: NgForm) {
    const rating =
      new Rating(
        ratingsForm.value.rating,
        ratingsForm.value.name,
        ratingsForm.value.comment);

    if (this.editMode === true) {
      this.ratingService.updateRating(this.editedItemIndex, rating);
    } else {
      this.ratingService.addRating(rating);
    }
    this.editMode = false;
    ratingsForm.reset();
  }

  deleteRating() {
    this.ratingService.deleteRating(this.editedItemIndex);
    this.clearForm();
  }

  clearForm() {
    this.editMode = false;
    this.editedItemIndex = null;

    this.ratingsForm.reset();
  }

  ngOnDestroy() {
    this.ratingSubscription.unsubscribe();
  }
}
