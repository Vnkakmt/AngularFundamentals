import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css']
})
export class NewCourseComponent {
  form = new FormGroup(
    {
      topics:new FormArray([])
    });

    addTopic(topic:HTMLInputElement){
      this.topics.push(new FormControl(topic.value));
      topic.value = ''
    }

    removeTopic(topic:any){
      let index = this.topics.controls.indexOf(topic);
      this.topics.removeAt(index);
    }

    get topics() { return this.form.get('topics') as FormArray }
}
