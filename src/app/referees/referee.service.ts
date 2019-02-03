import { Referee } from './referee.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Rating } from '../shared/rating.model';
import { RatingService } from '../ratings/rating.service';

@Injectable()
export class RefereeService {
  refereeSelected = new EventEmitter<Referee>();

  private referees: Referee[] = [
    new Referee(
      12,
      'Johnathan',
      'Kaplan',
      'Our foremost Referee',
      'https://cdn.24.co.za/files/Cms/General/d/2781/3d697212060b41f6a214ff3349397f69.jpg',
      [
        new Rating(1.0, 0, 'A bad day at the office'),
        new Rating(9.0, 0, 'A great day at the office'),
      ]
    ),
    new Referee(
      123,
      'John',
      'Kap',
      'Our Referee',
      'https://cdn.24.co.za/files/Cms/General/d/2781/3d697212060b41f6a214ff3349397f69.jpg',
      [
        new Rating(1.0, 0, 'A terrible day at the office'),
        new Rating(9.0, 0, 'A magnificent day at the office'),
      ]
    )
  ];

  constructor(private ratingService: RatingService) { }

  getReferees() {
    return this.referees.slice();
  }

  getReferee(id: number) {
    return this.referees.find(r => r.id === id);
  }

  addToRatings(ratings: Rating[]) {
    this.ratingService.addRatings(ratings);
  }
}
