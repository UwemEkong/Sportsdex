import { Component, OnInit } from '@angular/core';
import { AchievementsService } from 'src/app/services/achievements.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(public achievementService: AchievementsService) { }

  ngOnInit(): void {
    this.achievementService.getUnlockedAchievements();
    this.achievementService.getLeaderbooard();
    this.achievementService.getNumAch();
  }

  route() {

  }

  log(id: number | undefined) {
    console.log(id);
  }
}
