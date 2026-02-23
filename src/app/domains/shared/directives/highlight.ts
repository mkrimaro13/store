import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class Highlight {
  element:ElementRef = inject(ElementRef);
  constructor() {}
  ngOnInit(){
    this.element.nativeElement.style.backgroundColor =  "red";
  }
}
