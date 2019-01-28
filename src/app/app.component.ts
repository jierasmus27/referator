import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'referator';
  menuItem: string;

  changeMenu(item: string) {
    this.menuItem = item;
  }
}
