import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PasswordValidator } from './assignment-reactiveforms.validatos';

@Component({
  selector: 'assignment-reactiveforms',
  templateUrl: './assignment-reactiveforms.component.html',
  styleUrls: ['./assignment-reactiveforms.component.css']
})
export class AssignmentReactiveformsComponent {
form;
  constructor(fb:FormBuilder){
    this.form = fb.group({
      oldPassword:['',Validators.required,PasswordValidator.oldPasswordValidate],
      newPassword:['',Validators.required],
      confirmPassword:['',Validators.required]
    }, {
      validator:PasswordValidator.passwordShouldMatch
    })
  }

  get oldPassword(){ return this.form.get('oldPassword')}
  get newPassword(){ return this.form.get('newPassword')}
  get confirmPassword(){ return this.form.get('confirmPassword')}
}
