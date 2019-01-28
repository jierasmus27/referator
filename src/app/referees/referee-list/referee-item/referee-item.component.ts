import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Referee } from '../../referee.model';

@Component({
  selector: 'app-referee-item',
  templateUrl: './referee-item.component.html',
  styleUrls: ['./referee-item.component.css']
})
export class RefereeItemComponent implements OnInit {
  @Input() referee: Referee;
  @Output() refereeSelected = new EventEmitter<Referee>();

  constructor() { }

  ngOnInit() {
  }

  onRefereeSelect() {
    this.refereeSelected.emit();
  }

}
