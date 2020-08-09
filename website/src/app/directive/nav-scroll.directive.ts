import { Directive } from '@angular/core';

@Directive({
  selector: '[appNavScroll]',
  host: {'(window:scroll)': 'track($event)'}
})
export class NavScrollDirective {

  constructor() {
  }

  track($event: Event) {
    console.log("Scroll Event", $event);
  }

}
