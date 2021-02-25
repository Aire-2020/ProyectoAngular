import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMostrarMas]'
})
export class MostrarMasDirective {

  constructor(private e: ElementRef, 
    private r: Renderer2) { }

@Input() elementoMostrar: any;

@HostListener('mouseenter')
entraMouse(){
 // let c = this.e.nativeElement.querySelector('.ocultar');
this.r.setStyle(this.elementoMostrar,'display','')
  
}
@HostListener('mouseleave')
saleMouse(){
 // let c = this.e.nativeElement.querySelector('.ocultar');
this.r.setStyle(this.elementoMostrar,'display','none')
}

}
