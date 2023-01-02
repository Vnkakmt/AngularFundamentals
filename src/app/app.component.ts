import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './assignment/assignment.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses = [
    {id:1, name:'course1'},
    {id:1, name:'course2'},
    {id:1, name:'course3'},
  ];
  
}
