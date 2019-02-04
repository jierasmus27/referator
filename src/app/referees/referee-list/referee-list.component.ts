import { Component, OnInit } from '@angular/core';
import { Referee } from '../referee.model';
import { RefereeService } from '../referee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-referee-list',
  templateUrl: './referee-list.component.html',
  styleUrls: ['./referee-list.component.css']
})
export class RefereeListComponent implements OnInit {
  referees: Referee[];

  constructor(private refereeService: RefereeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.referees = this.refereeService.getReferees();
  }

  onNewReferee() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
