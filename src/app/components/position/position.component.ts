import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.scss']
})
export class PositionComponent implements OnInit {

  @Input() position: any;

  constructor() { }

  ngOnInit() {
  }

  getLength() {
    const endDate = this.position.position[0]['end-date'];
    const startDate = this.position.position[this.position.position.length - 1]['start-date'];
    return `${startDate} - ${endDate}`;
  }

}
