import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
    selector:'courses',
    template:`
    <button class="btn btn-primary" [class.active]="isActive">Save</button>    
    `
})
export class CoursesComponent{
        title = "List of courses";
        courses;
        imgUrl = "https://picsum.photos/200/300";
        colSpan = 2;
        isActive = true;

        constructor(service: CoursesService){
            this.courses = service.getCourses();
        }
}