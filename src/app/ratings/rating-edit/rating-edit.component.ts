import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Rating } from 'src/app/shared/rating.model';
import { RatingService } from '../rating.service';

@Component({
  selector: 'app-rating-edit',
  templateUrl: './rating-edit.component.html',
  styleUrls: ['./rating-edit.component.css']
})
export class RatingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('ratingInput') ratingInput: ElementRef;
  @ViewChild('commentInput') commentInput: ElementRef;

  constructor(private ratingService: RatingService) { }

  ngOnInit() {
  }

  addRating() {
    const rating =
      new Rating(
        this.ratingInput.nativeElement.value,
        this.nameInput.nativeElement.value,
        this.commentInput.nativeElement.value);

    this.ratingService.addRating(rating);
  }
}
