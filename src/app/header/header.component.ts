import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html'
})
export class HeaderComponent {
  @Output() itemClick = new EventEmitter<string>();

  onItemClick(item: string) {
    this.itemClick.emit(item);
  }
}
