import { AbstractControl, ControlContainer, ValidationErrors, Validators } from "@angular/forms"

export class PasswordValidator{
    static oldPasswordValidate(control:AbstractControl) : Promise<ValidationErrors | null>{
        return new Promise((resolve,reject) =>{
            setTimeout(() => {
               if(control.value != 'abcd') 
               resolve ({oldPasswordValidate:true})
               else
               resolve (null); 
            }, 2000);
        });
    }

    static passwordShouldMatch(control:AbstractControl){
        let newPassword = control.get('newPassword');
        let confirmPassword = control.get('confirmPassword');

        if(newPassword?.value !== confirmPassword?.value)
            return {passwordShouldMatch:true};
        
        return null;
    }
}