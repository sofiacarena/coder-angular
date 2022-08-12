import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appGradeColor]'
})
export class GradeColorDirective {
  @Input('appGradeColor') grade!: number;

  constructor(
    private element: ElementRef
  ) {}

  ngOnInit(): void {
    this.element.nativeElement.style.color = this.grade > 3 ? `green` : `red`;
    this.element.nativeElement.style.fontWeight = '600';
  }
}
