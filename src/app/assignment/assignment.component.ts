import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  @Input() isFav:boolean = false;
  @Output() change = new EventEmitter();
  constructor(){

  }
  
  ngOnInit(){

  }

  onClick(){
    this.isFav = !this.isFav;
    this.change.emit();
  }

}
