import { Component, OnInit, Input } from '@angular/core';
import { Referee } from '../referee.model';
import { RefereeService } from '../referee.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-referee-detail',
  templateUrl: './referee-detail.component.html',
  styleUrls: ['./referee-detail.component.css']
})
export class RefereeDetailComponent implements OnInit {
  private referee: Referee;

  constructor(private refereeService: RefereeService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    let id = +this.route.snapshot.params['id'];
    this.referee = this.refereeService.getReferee(id);

    this.route.params.subscribe(
      (params: Params) => {
        id = +params['id'];
        this.referee = this.refereeService.getReferee(id);
    });
  }

  toRatingsList(referee: Referee) {
    this.refereeService.addToRatings(referee.ratings);
  }

  onEditReferee() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
}
