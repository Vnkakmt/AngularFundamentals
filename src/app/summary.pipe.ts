import {Pipe, PipeTransform} from '@angular/core'

//add pipe decorator
@Pipe({
    name: 'Summary'
})
export class SummaryPipe  implements PipeTransform{
    //implement transform method from PipeTransform
    transform(value: any, limit?: number) {
        //we can add multiple parameters after limit (limit?: number, param1: any and so on...)
        if(!value)
        return null;

        let actualLimit = (limit) ? limit : 50;
        return value.substr(0, actualLimit) + '...'
    }
}