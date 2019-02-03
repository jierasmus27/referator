import { Component, OnInit, Input } from '@angular/core';
import { Referee } from '../../referee.model';

@Component({
  selector: 'app-referee-item',
  templateUrl: './referee-item.component.html',
  styleUrls: ['./referee-item.component.css']
})
export class RefereeItemComponent implements OnInit {
  @Input() referee: Referee;

  constructor() { }

  ngOnInit() {
  }
}
