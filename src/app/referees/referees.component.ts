import { Component, OnInit } from '@angular/core';
import { Referee } from './referee.model';

@Component({
  selector: 'app-referees',
  templateUrl: './referees.component.html',
  styleUrls: ['./referees.component.css']
})
export class RefereesComponent implements OnInit {
  selectedReferee: Referee;

  constructor() { }

  ngOnInit() {
  }

  setReferee(referee: Referee) {
    this.selectedReferee = referee;
  }

}
