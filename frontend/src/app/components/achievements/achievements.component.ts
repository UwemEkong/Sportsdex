import { Component, OnInit } from '@angular/core';
import {AchievementsService} from "../../services/achievements.service";


@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss']
})
export class AchievementsComponent implements OnInit {

  constructor(private achievementService: AchievementsService) {
    this.achievementService = achievementService;
  }

  ngOnInit(): void {

    this.getAchievements()
  }

   getAchievements() {
    return this.achievementService.getLockedAchievements();

  }

}
