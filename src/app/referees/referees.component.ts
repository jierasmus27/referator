import { Component, OnInit } from '@angular/core';
import { Referee } from './referee.model';
import { RefereeService } from './referee.service';

@Component({
  selector: 'app-referees',
  templateUrl: './referees.component.html',
  styleUrls: ['./referees.component.css'],
  providers: [RefereeService]
})
export class RefereesComponent implements OnInit {
  selectedReferee: Referee;

  constructor(private refereeService: RefereeService) { }

  ngOnInit() {
    this.refereeService.refereeSelected
      .subscribe(
        (referee: Referee) => {
          this.selectedReferee = referee;
        }
      );
  }

  setReferee(referee: Referee) {
    this.selectedReferee = referee;
  }

}
