import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heading-card',
  templateUrl: './heading-card.component.html',
  styleUrls: ['./heading-card.component.scss']
})
export class HeadingCardComponent {

  @Input() resume: any;

  constructor() { }
}
