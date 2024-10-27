import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  favorites: string[] = []; // Changed to an array for multiple favorites

  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }

  // Add a method to handle favorite selection
  onFavoriteSelected(person: string) {
    if (!this.favorites.includes(person)) {
      this.favorites.push(person);
    }
  }

  // Add a method to remove favorite
  removeFavorite(person: string) {
    this.favorites = this.favorites.filter(fav => fav !== person);
  }
}
