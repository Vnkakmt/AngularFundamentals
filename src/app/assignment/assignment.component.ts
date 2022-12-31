import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  @Input('isFav') isSelected:boolean = false;
  @Output() change = new EventEmitter();
  constructor(){

  }
  
  ngOnInit(){

  }

  onClick(){
    this.isSelected = !this.isSelected;
    this.change.emit();
  }

}
