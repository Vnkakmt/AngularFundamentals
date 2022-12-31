import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
    selector:'courses',
    template:`
    <input (keyup.enter)="onKeyUp($event)"/>
    `
})
export class CoursesComponent{

    onDivClicked(){
        console.log("Div is called")
    }
    onKeyUp($event:any){
        console.log("Enter was clicked");
    

    }

}