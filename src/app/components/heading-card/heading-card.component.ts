import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heading-card',
  templateUrl: './heading-card.component.html',
  styleUrls: ['./heading-card.component.scss']
})
export class HeadingCardComponent {

  @Input() resume: any;

  constructor() {
    window.onscroll = () => {
      if(window.pageYOffset > 220) {
        document.getElementById("scroll-nav").style.top = "-10px";
      } else {
        document.getElementById("scroll-nav").style.top = "-80px";
      }
    }
  }
}
