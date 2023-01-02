import { style } from '@angular/animations';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css'],
  //use below  if line is less for styling
  // using the below styles makes angular prioritise it first the the .css file
  styles: [
    `
    .test {
      color: red;
      background-color:burlywood;
  }
    `
  ]
})
export class AssignmentComponent {

  @Input('isFav') isSelected:boolean = false;
  @Output('change') click = new EventEmitter();

  onClick(){
    this.isSelected = !this.isSelected;
    this.click.emit({newValue: this.isSelected });
  }  

}

export interface FavoriteChangedEventArgs{
  newValue: boolean;
}
