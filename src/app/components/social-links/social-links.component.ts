import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.scss']
})
export class SocialLinksComponent implements OnInit {

  @Input() linkedIn: string;
  @Input() gitHub: string;

  constructor() { }

  ngOnInit() {
   
  }

}
