import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './assignment/assignment.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses:any;

  loadCourses(){
    this.courses = [
      {id:1, name:'course1'},
      {id:2, name:'course2'},
      {id:3, name:'course3'},
    ];
  }

  trackCourse(index:any, course:any){
    return course ? course.id : undefined;
  }

}
