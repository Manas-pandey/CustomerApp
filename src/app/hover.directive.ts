import { Directive, ElementRef, Renderer2, HostListener, Input, HostBinding } from '@angular/core';
import { MockNgModuleResolver } from '@angular/compiler/testing';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  @Input()
  selector:any;

  @HostBinding('style.border')
  border:string;

  constructor(private e1:ElementRef, private renderer: Renderer2) { 
    console.log(e1.nativeElement);
  }

  @HostListener('mouseover')
  mouseOver():void{
    const elem = this.e1.nativeElement.querySelector(this.selector.option);
    this.renderer.setStyle(elem,'display','none');
    this.border = '3px solid red';
  }
  @HostListener('mouseout')
  mouseOut():void{
    const elem = this.e1.nativeElement.querySelector(this.selector.option);
    this.renderer.setStyle(elem,'display','block');
    this.border = '';

  }

}
