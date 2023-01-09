import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthorsService } from '../authors.service';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    account : new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    })

  });

  // login(){
  //   this.form.setErrors({
  //     invalidLogin: true
  //   });
  // }
  //if we had an auth service
  // login(){
  //  let isValid = AuthService.login(this.form.value)
  //  if(!isValid){
  //   this.form.setErrors({
  //     invalidLogin:true
  //   })
  //   }
  //  }
  // }

  get username() { return this.form.get('account.username'); }
  get password() { return this.form.get('account.password'); }
}
