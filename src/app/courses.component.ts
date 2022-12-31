import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
    selector:'courses',
    template:`
    <button (click)="onSave($event)">Save</button>    
    `
})
export class CoursesComponent{

    onSave($event:any){
        console.log("Button was clicked", $event);
    }

}