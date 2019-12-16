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
      if(window.pageYOffset > 360) {
        document.getElementById("scroll-nav").style.top = "-10px";
      } else {
        document.getElementById("scroll-nav").style.top = "-80px";
      }
    }
  }

  getTagline() {
    if(this.resume.tagline === null) {
      let title = this.resume.jobs[0].position[0].title;
      let employer = this.resume.jobs[0].employer;

      return `${title} at ${employer}`;
    } else {
      return this.resume.tagline;
    }
  }
}
