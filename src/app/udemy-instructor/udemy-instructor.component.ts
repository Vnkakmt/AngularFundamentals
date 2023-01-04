import { Component, } from '@angular/core';

@Component({
  selector: 'udemy-instructor',
  templateUrl: './udemy-instructor.component.html',
  styleUrls: ['./udemy-instructor.component.css']
})
export class UdemyInstructorComponent {

  submit(x:any){
    console.log(x)
  }

courseType=[
  {id:1, name:'Art'},
  {id:2, name:'Philosopy'},
  {id:3, name:'Development'},
  {id:4, name:'Fitness'},
];

}
