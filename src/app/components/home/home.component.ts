import { Component } from '@angular/core';
import { WebsiteService } from 'src/app/website.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  resume: any;

  constructor(private websiteService: WebsiteService) {
    websiteService.getExperience().subscribe(data => {
      this.resume = data;
    });
  }

  getFirstName() {
    return this.resume.split(" ")
  }
}
