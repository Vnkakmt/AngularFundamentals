import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
    selector:'courses',
    template:`
    {{text | Summary:10}}
    `
})
export class CoursesComponent{
 text = `
 Lorem ipsum is sdajalkj asdadf aadfdfdsf jejprejgfg gpojpgergker kfgodfgjpdfgdjgp kjjgsjpg`
}