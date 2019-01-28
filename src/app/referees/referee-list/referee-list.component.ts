import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Referee } from '../referee.model';

@Component({
  selector: 'app-referee-list',
  templateUrl: './referee-list.component.html',
  styleUrls: ['./referee-list.component.css']
})
export class RefereeListComponent implements OnInit {
  @Output() refereeSelect = new EventEmitter<Referee>();

  referees: Referee[] = [
    new Referee('Johnathan', 'Kaplan', 'Our foremost Referee',
                'https://cdn.24.co.za/files/Cms/General/d/2781/3d697212060b41f6a214ff3349397f69.jpg'),
    new Referee('John', 'Kap', 'Our Referee',
                'https://cdn.24.co.za/files/Cms/General/d/2781/3d697212060b41f6a214ff3349397f69.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRefereeSelected(referee: Referee) {
    this.refereeSelect.emit(referee);
  }

}
