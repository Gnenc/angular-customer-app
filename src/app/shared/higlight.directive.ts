import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[higlight], input'
})
export class HiglightDirective {

  constructor(element: ElementRef) { 
    element.nativeElement.style.backgroundColor = "#efeeed";
  }

}
