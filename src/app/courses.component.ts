import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
    selector:'courses',
    template:`
    <button [style.background]="isActive ? 'blue' : 'white'">Save</button>    
    `
})
export class CoursesComponent{
        title = "List of courses";
        courses;
        imgUrl = "https://picsum.photos/200/300";
        colSpan = 2;
        isActive = false;

        constructor(service: CoursesService){
            this.courses = service.getCourses();
        }
}