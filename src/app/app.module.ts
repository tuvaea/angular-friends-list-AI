import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PeopleComponent } from './people/people.component'; // Import the new component
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent // Add PeopleComponent here
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
