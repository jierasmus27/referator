import { Referee } from './referee.model';
import { EventEmitter } from '@angular/core';

export class RefereeService {
  refereeSelected = new EventEmitter<Referee>();

  private referees: Referee[] = [
    new Referee('Johnathan', 'Kaplan', 'Our foremost Referee',
      'https://cdn.24.co.za/files/Cms/General/d/2781/3d697212060b41f6a214ff3349397f69.jpg'),
    new Referee('John', 'Kap', 'Our Referee',
      'https://cdn.24.co.za/files/Cms/General/d/2781/3d697212060b41f6a214ff3349397f69.jpg')
  ];

  getReferees() {
    return this.referees.slice();
  }

}