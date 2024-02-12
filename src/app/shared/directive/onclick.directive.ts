import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnclick]'
})
export class OnclickDirective {

  constructor(private eleRef : ElementRef) { 
    // console.log(this.eleRef.nativeElement)
    // this.eleRef.nativeElement.classList.add('d-none');
    // this.eleRef.nativeElement.classList.remove()
  }

  @HostListener("click",['$event'])
  onEdit(eve : Event){
    console.log(eve.target)
    let btn = eve.target as HTMLButtonElement
    btn.classList.add('d-none')
    
  }
}
