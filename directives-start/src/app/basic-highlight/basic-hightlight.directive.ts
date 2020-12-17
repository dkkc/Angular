import {OnInit, Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHightlightDirective implements OnInit{
  constructor(private elementRef: ElementRef) {

  }

  ngOnInit() {
    // this.elementRef.nativeElement.style.backgroundColor = '#fff22aaa';
    this.elementRef.nativeElement.style.backgroundColor = 'green';
    this.elementRef.nativeElement.style.color = '#ffffff';
  }
}
