import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  isFav:boolean = false;
  constructor(){

  }
  ngOnInit(){

  }

  onClick(){
    this.isFav = !this.isFav;
  }

}
