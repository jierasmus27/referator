import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Referee } from '../referee.model';

@Component({
  selector: 'app-referee-detail',
  templateUrl: './referee-detail.component.html',
  styleUrls: ['./referee-detail.component.css']
})
export class RefereeDetailComponent implements OnInit, OnChanges {
  @Input() referee: Referee;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
  }

}
