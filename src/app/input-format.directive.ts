import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  @Input('appInputFormat') format:any; // we can pass data to our directives using input properties, if only 1 property we can use selector of the directive as input alias 
  constructor(private el:ElementRef) { }
  
  // @HostListener('focus') onFocus(){
  //   console.log("on Focus");
  // }

  @HostListener('blur') onBlur(){   //we can use Hostlistener to subscribe to the object raised by host DOM object
    let value : string = this.el.nativeElement.value;
    if(this.format == 'lowercase')
    this.el.nativeElement.value = value.toLowerCase();
    else
    this.el.nativeElement.value = value.toUpperCase();
    //console.log("on Blur");
  }

  

}
