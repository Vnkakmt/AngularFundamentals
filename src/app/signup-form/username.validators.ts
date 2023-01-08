import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsernameValidators {
    static cannotContainSpace(control: AbstractControl) : ValidationErrors | null{
        if((control.value as string).indexOf(' ') >= 0)
        return { cannotContainSpace: true};

        return null;
        }

    static shouldBeUnique(control: AbstractControl) : Promise<ValidationErrors | null>{ //return type of ths function is a promise
        return new Promise((resolve, reject) =>{ 
            setTimeout(() => {
                if(control.value == 'mosh')
                resolve ({ shouldBeUnique : true})
            else 
                resolve(null);
                //console.log('0k')
            }, 2000);
        });
    }
}