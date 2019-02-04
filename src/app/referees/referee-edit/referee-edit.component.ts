import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RefereeService } from '../referee.service';
import { Referee } from '../referee.model';

@Component({
  selector: 'app-referee-edit',
  templateUrl: './referee-edit.component.html',
  styleUrls: ['./referee-edit.component.css']
})
export class RefereeEditComponent implements OnInit {
  private id: number;
  private referee: Referee;
  private editMode = false;

  constructor(private route: ActivatedRoute, private refereeService: RefereeService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.referee = this.refereeService.getReferee(this.id);
        this.editMode = params['id'] != null;
      });
  }
}
