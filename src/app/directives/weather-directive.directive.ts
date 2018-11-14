import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[appWeatherDirective]'
})
export class WeatherDirectiveDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

}
