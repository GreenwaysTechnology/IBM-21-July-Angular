import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input()
  appHighlight!: string;

  constructor(private element: ElementRef) {
    console.dir(this.element.nativeElement)
    //this.element.nativeElement.style.backgroundColor = this.appHighlight;
  }
  //Event listener
  @HostListener('mouseenter')
  public onMouseEnter() {
    console.log('enter')
    this.highLight(this.appHighlight)
  }
  @HostListener('mouseleave')
  public onMouseMove() {
    console.log('leaving')
    this.highLight(null);
  }
  private highLight(color: any) {
    this.element.nativeElement.style.backgroundColor = color
  }

}
