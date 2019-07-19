import { Directive, ElementRef, Input } from '@angular/core';
import { NgScrollbarState } from '../ng-scrollbar';

@Directive({ selector: '[ngAttr]' })
export class NgAttr {

  constructor(private el: ElementRef) {
  }

  @Input() set ngAttr(attrs: NgScrollbarState) {
    for (const [key, value] of Object.entries(attrs)) {
      (this.el.nativeElement as HTMLElement).setAttribute(key, value);
    }
  }
}
