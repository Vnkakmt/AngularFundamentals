import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
    selector:'courses',
    template:`
    {{course.title | lowercase}} <br/>
    {{course.students |number }} <br/>
    {{course.rating | number:'1.1-1'}} <br/>
    {{course.price | currency: 'INR':true:'3.2-2'}} <br/>
    {{course.releaseDate  | date:'shortDate'}} <br/>
    `
})
export class CoursesComponent{
    course = {
        title: "The complete Angular course",
        rating: 4.9745,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2016, 3, 1) 
    }

}