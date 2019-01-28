import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';
import { Rating } from 'src/app/shared/rating.model';

@Component({
  selector: 'app-rating-edit',
  templateUrl: './rating-edit.component.html',
  styleUrls: ['./rating-edit.component.css']
})
export class RatingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('ratingInput') ratingInput: ElementRef;
  @ViewChild('commentInput') commentInput: ElementRef;

  @Output() ratingAdded = new EventEmitter<Rating>();

  constructor() { }

  ngOnInit() {
  }

  addReferee() {
    const rating =
      new Rating(
        this.nameInput.nativeElement.value,
        this.ratingInput.nativeElement.value,
        this.commentInput.nativeElement.value);

    // this.ratingAdded.emit(rating);
  }
}
