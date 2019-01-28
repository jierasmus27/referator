import { Component, OnInit } from '@angular/core';
import { Referee } from '../referee.model';
import { RefereeService } from '../referee.service';

@Component({
  selector: 'app-referee-list',
  templateUrl: './referee-list.component.html',
  styleUrls: ['./referee-list.component.css']
})
export class RefereeListComponent implements OnInit {
  referees: Referee[];

  constructor(private refereeService: RefereeService) { }

  ngOnInit() {
    this.referees = this.refereeService.getReferees();
  }
}
