import { Component, OnInit, Input } from '@angular/core';
import { Referee } from '../referee.model';
import { RatingService } from 'src/app/ratings/rating.service';

@Component({
  selector: 'app-referee-detail',
  templateUrl: './referee-detail.component.html',
  styleUrls: ['./referee-detail.component.css']
})
export class RefereeDetailComponent implements OnInit {
  @Input() referee: Referee;

  constructor(private ratingService: RatingService) { }

  ngOnInit() {
  }

  toRatingsList(referee: Referee) {
    this.ratingService.addRatings(referee.ratings);
  }
}
