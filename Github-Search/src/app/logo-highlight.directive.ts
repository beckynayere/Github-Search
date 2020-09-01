import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appLogoHighlight]'
})
export class LogoHighlightDirective {

  constructor(private elem: ElementRef) { 
    this.elem.nativeElement.style.color = '#51e2f5';
  }

}



// import { Directive, Input, ElementRef } from '@angular/core';

// @Directive({
//   selector: '[appLogoHighlight]'
// })
// export class LogoHighlightDirective {

//   constructor(private elem: ElementRef) {
//     this.elem.nativeElement.style.color = '#51e2f5';
//    }

// }