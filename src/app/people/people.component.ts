import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent {
  @Input() name: string | null = null;
  @Output() favoriteSelected = new EventEmitter<string>();

  selectFavorite() {
    if (this.name) {
      this.favoriteSelected.emit(this.name);
    }
  }
}
