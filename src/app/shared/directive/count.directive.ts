import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { count } from 'rxjs';

@Directive({
  selector: '[appCount]'
})
export class CountDirective {


  constructor(private eleref : ElementRef,private renderer : Renderer2) { 
    // console.log(this.eleref.nativeElement)
    // var count!:number
    // if(this.eleref.nativeElement.length){
    //   // this.eleref.nativeElement.value=0
    // //   let ch = this.eleref.nativeElement.length;
    // // console.log(ch);
    // //   // count++
    // let ch = this.eleref.nativeElement? count++ : 0
    // }
    // console.log(count);

    // @HostListener()
    
     
  }

  

}
