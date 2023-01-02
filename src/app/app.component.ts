import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './assignment/assignment.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  viewMode='somethingElse';
}
