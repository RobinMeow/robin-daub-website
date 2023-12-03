
// CAREFUL: DIRECT DEPENDENCY to software-engineering.component 
// It uses the info-box css class as filter. To NOT apply a random rotation.

import { Directive, ElementRef, OnInit } from '@angular/core';
import { AnimationBuilder, animate, style } from '@angular/animations';

@Directive({
  selector: '[appPlayRandomizedFadeInAnimateWhenInViewport]',
  standalone: true,
})
export class PlayRandomizedFadeInAnimateWhenInViewportDirective implements OnInit {
  
  private _intersectionObserver: IntersectionObserver;
  
  constructor(
    private _element: ElementRef,
    private _animationBuilder: AnimationBuilder // Singleton
  ) {
    const element: any = this._element.nativeElement;
    element.style = `opacity: 0;`; // hide the element to begin
    
    // generate random values for animations
    const translateAxis: string = PlayRandomizedFadeInAnimateWhenInViewportDirective.randomNumberFromInterval('translateAxis', 0, 1) == 0 
      ? 'Y' 
      : 'X';
    const translateDistanceSign: string = PlayRandomizedFadeInAnimateWhenInViewportDirective.randomNumberFromInterval('translateDistanceSign', 0, 1) == 0 
      ? '-' 
      : '';
      const translateDistance = PlayRandomizedFadeInAnimateWhenInViewportDirective.randomNumberFromInterval('translateDistance', 0, 1) == 0
      ? 100 
      : 200; // actually with, the key, it is alternating, not fifty fifty XD (still more random than a static boolean which converts each time)
    const translateFromOrigin: string = `translate${translateAxis}(${translateDistanceSign}${translateDistance}px)`;
      
    const animationDuration = PlayRandomizedFadeInAnimateWhenInViewportDirective.randomNumberFromInterval('animationDuration', 400, 550);
    const isInfoBox: boolean = element.classList.contains('info-box');
    const rotateInDegreeSign: string = PlayRandomizedFadeInAnimateWhenInViewportDirective.randomNumberFromInterval('rotateNegative', 0, 1) == 0 
      ? '-' 
      : '';
    const rotationInDegree = PlayRandomizedFadeInAnimateWhenInViewportDirective.randomNumberFromInterval('rotationInDegree', 2, 5);
    const rotateInDeg: string = `rotate(${rotateInDegreeSign}${rotationInDegree}deg)`;
    const transformAnimation: string = isInfoBox ? 'none' : rotateInDeg;
    
    // construct animation factory and player
    const animationFactory = this._animationBuilder.build([
      style({ opacity: 0, transform: translateFromOrigin }),
      animate(animationDuration + 'ms ease-out', style({ opacity: 1, transform: transformAnimation })),
    ]);
    
    const _animationPlayer = animationFactory.create(element);
    
    // create callback for 'when element comes half visible' 
    const fadeInInMilliseconds = PlayRandomizedFadeInAnimateWhenInViewportDirective.randomNumberFromInterval('fadeInInMilliseconds', 0, 300);
    const intersectionObserverCallback: IntersectionObserverCallback = (entries: IntersectionObserverEntry[]) => {
      if (entries.length > 1) console.error(new Error('only one entry expected.')); // I dont actually know how many entries to expect, but testing always resulted in one entry only. 
      
      const entry = entries[0];
      if (entry.isIntersecting === true) { // isIntersecting = true when element and viewport are overlapping | = false when element and viewport don't overlap
        this._intersectionObserver.disconnect();
        const cleanUp = () => {
          element.style = `opacity: 1; transform: ${transformAnimation}`; // keep the animation end postion
          _animationPlayer.destroy(); // remove blurry effect 
        };
        
        _animationPlayer.onDone(cleanUp);
        
        // fade in after random time
        setTimeout(() => _animationPlayer.play(), fadeInInMilliseconds); 
      }
    };
    
    this._intersectionObserver = new IntersectionObserver(intersectionObserverCallback, { threshold: [ 0.5 ] }); // 1 fully visible, 0 on the edge? or just became visible 
  }
  
  ngOnInit(): void {
    this._intersectionObserver.observe(this._element.nativeElement);
  }
  
  private static _map: Map<string, number | undefined> = new Map<string, number>();
  static randomNumberFromInterval(key: string, min: number, max: number): number { 
    if (((max - min + 1) < 2)) throw new Error('cant generate number with only one possibility.'); // + 1 because min can be zero, which counts as one 
    
    let previousNumber: number | undefined = PlayRandomizedFadeInAnimateWhenInViewportDirective._map.get(key);
      
    let randomNumber: number = -1;
    do {
      // this happens quite often ... 
      randomNumber = Math.floor(Math.random() * (max - min + 1) + min); 
    }
    while ((previousNumber != undefined) && randomNumber == previousNumber);
    
    PlayRandomizedFadeInAnimateWhenInViewportDirective._map.set(key, randomNumber);
    
    return randomNumber;
  }
}

/*
I need docs for this one!: 

- Make sure to build `const animationFactory = this._animationBuilder.build` a factory for each animation. Not supposed to be shared. 

- In this case, I want the intersection server to be called only as often, until the element is fully 'visible' (if the opacity wouldnt be zero). So I disconnect when that happens. (Not when the animation finishes)

- Destroy the AnimationPlayer `onDone` seemed to cause alot of issues, but apperently they were releated elsewhere, because the errors dont uccor anymore. 
It is important to destroy the animation, not for memory but because there is motion (blur) on the element while it exists. 
Not having a reference in Directive-Scope is definetly helpful, when destroying, but didnt seem necessary (but could have solved issues in the first place, maybe. didnt test it.) 

*/ 
