import { Component, OnInit } from '@angular/core';
import { Achievement } from 'src/app/interfaces/Achievement';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() { }

   achievementList: Achievement[] = [
    {title: "Met Benny The Bull", image:"https://images.daznservices.com/di/library/omnisport/47/aa/benny-the-bull-41616-usnews-getty-ftr_15a2o1pnh5pos1cog2e6847p5b.jpg?t=633351572&quality=100"},
    {title: "Met Benny The Bull", image:"https://images.daznservices.com/di/library/omnisport/47/aa/benny-the-bull-41616-usnews-getty-ftr_15a2o1pnh5pos1cog2e6847p5b.jpg?t=633351572&quality=100"}
];

  ngOnInit(): void {
  }

}
