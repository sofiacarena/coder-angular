import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHeaderSize]'
})
export class HeaderSizeDirective {

  constructor(
    private element: ElementRef
  ) {
    element.nativeElement.style.fontSize = "20px";
  }

}
