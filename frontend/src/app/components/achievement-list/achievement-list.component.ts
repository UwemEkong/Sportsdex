import { Component, OnInit } from '@angular/core';
import { Achievement } from 'src/app/interfaces/Achievement';

@Component({
  selector: 'app-achievement-list',
  templateUrl: './achievement-list.component.html',
  styleUrls: ['./achievement-list.component.scss']
})
export class AchievementListComponent implements OnInit {

  constructor() { }
  achievementList: Achievement[] = [
    {title: "Met Benny The Bull", image:"https://images.daznservices.com/di/library/omnisport/47/aa/benny-the-bull-41616-usnews-getty-ftr_15a2o1pnh5pos1cog2e6847p5b.jpg?t=633351572&quality=100"},
    {title: "Got a Zach LaVine Autograph", image:"https://cdn-headshots.theathletic.com/nba/20000804.png"}
];

  ngOnInit(): void {
  }

}
