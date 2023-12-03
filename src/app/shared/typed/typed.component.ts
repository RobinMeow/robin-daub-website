import { Component, Input } from '@angular/core';
import Typed, { TypedOptions } from 'typed.js';

@Component({
  selector: 'shared-typed',
  standalone: true,
  imports: [],
  templateUrl: './typed.component.html',
  styleUrl: './typed.component.scss',
})
export class TypedComponent {
  private _typed!: Typed;

  private _preventAutoStart: boolean = false;

  private readonly SCROLL_INTO_VIEW_OPTIONS = {
    block: 'center',
    inline: 'nearest',
    behavior: 'smooth',
  };
  private _typedOptions: TypedOptions = {
    onStop: (_, typed) => {
      typed.cursor.hidden = true;
    },

    onStart: (_, typed) => {
      typed.cursor.hidden = false;
      let element: HTMLElement | null = document.getElementById(
        this.getTypedStringId,
      );
      if (element == null) {
        // It can be null. when the user navigates to another component.
        typed.stop(); // cuz its not visible anymore anyways..
      } else if (!isElementInViewport(element)) {
        // Docs for scrollIntoView parameters  https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
        const itsExperimentalTheySaid: any = element as any; // works good on my machine (〜￣▽￣)〜
        itsExperimentalTheySaid.scrollIntoView(this.SCROLL_INTO_VIEW_OPTIONS);
      } else {
      } // already in view
    },

    onComplete: (typed) => {
      typed.cursor.remove();
      if (this.startOnComplete != null) {
        setTimeout(() => {
          this.startOnComplete!._typed.start();
        }, this.startOnComplete!._typedOptions.startDelay);
      }
    },
  };

  @Input() name!: string;
  @Input() typeSpeed: number = 80;
  @Input() backSpeed: number = 80;
  @Input() startDelay: number = 0;
  @Input() startOnComplete?: TypedComponent;

  ngAfterViewInit(): void {
    // make assertion and static string array for names to make sure all names are unique
    this._typedOptions.typeSpeed = this.typeSpeed;
    this._typedOptions.backSpeed = this.backSpeed;
    this._typedOptions.startDelay = this.startDelay;
    this._typedOptions.stringsElement = '#' + this.getTypedStringId;

    this._typed = new Typed('#' + this.getTypeWriteId, this._typedOptions);

    if (this.startOnComplete != null) {
      this.startOnComplete._preventAutoStart = true;
    }

    if (this._preventAutoStart) {
      this._typed.stop();
    }
  }

  private static ID_PREFIX: string = 'TypedComponent_';

  protected get getTypedStringId(): string {
    return TypedComponent.ID_PREFIX + this.name;
  }

  protected get getTypeWriteId(): string {
    return TypedComponent.ID_PREFIX + this.name + '_TypeWrite';
  }
}

function isElementInViewport(element: HTMLElement) {
  // ToDo: Add padding, cuz the elemts dont have a rect, they are 0px widht and height at the time this is executed. Also I dont like reading text at the very bottom of my screen
  var rect = element.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight ||
        document.documentElement.clientHeight) /* or $(window).height() */ &&
    rect.right <=
      (window.innerWidth ||
        document.documentElement.clientWidth) /* or $(window).width() */
  );
}
