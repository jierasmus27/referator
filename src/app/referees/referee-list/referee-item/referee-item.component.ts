import { Component, OnInit, Input } from '@angular/core';
import { Referee } from '../../referee.model';
import { RefereeService } from '../../referee.service';

@Component({
  selector: 'app-referee-item',
  templateUrl: './referee-item.component.html',
  styleUrls: ['./referee-item.component.css']
})
export class RefereeItemComponent implements OnInit {
  @Input() referee: Referee;


  constructor(private refereeService: RefereeService) { }

  ngOnInit() {
  }

  onRefereeSelect() {
    this.refereeService.refereeSelected.emit(this.referee);
  }

}
